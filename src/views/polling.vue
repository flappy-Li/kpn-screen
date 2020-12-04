<template>
  <div class="energyConsumMonitor default-layout">
    <top-header>
      <p
        :data-text="titleName"
        class="text-default-style title-size"
        slot="title_text"
      >
        {{ titleName }}
      </p>
      <p
        :data-text="introText"
        class="text-default-style intro-size"
        slot="intro_text"
      >
        {{ introText }}
      </p>
    </top-header>
    <div class="layout-content constructor-layout column-flex">
        <div class="flowChart">
          <div class="input-layer" @click="open">查询</div>
          <div class="backgroundChart-text"></div>
          <div class="tip-layer">
            <div class="column">
              <div :class='["rectangle","top", {rectangleActive: status == 1}]'></div>
              <div :class='["diamond", "center", {diamondActive: status == 2}]'></div>
              <div :class="['rectangle', 'bottom', {rectangleActive: status == 3}]"></div>
            </div>
            <div class="rows">
              <div :class="['rectangle', 'bottom1',{rectangleActive: status == 4}]"></div>
              <div :class="['rectangle', 'bottom2',{rectangleActive: status == 5}]"></div>
              <div :class="['rectangle', 'bottom3',{rectangleActive: status == 6}]"></div>
              <div :class="['ellipse', 'bottom4',{ellipseActive: status == 7}]"></div>
            </div>
          </div>
          <div class="layout-wrap wrap-style column-flex">
            <div class="hander-top square-wrapBg">{{oldStatus | tableTitle}}</div>
              <div class="header-layer" v-if="![5,6].includes(oldStatus)">
                <p>操作人：<span>{{ title.createName || "无"}}</span></p>
                <p v-if="oldStatus !== 2">创建时间：<span>{{ title.createTime || '无'}}</span></p>
                <p v-if="oldStatus == 2">审批时间：<span>{{title.createTime}}</span></p>
              </div>
              <div class="seamless-wrap">
                <seamless :table-list="tableData"></seamless>
              </div>
          </div>
        </div>
    </div>
    <div class="dialog" v-show="dialogVisibility" >
      <div class="input-wrap">
        <div class="input-inner-wrap">
            <input type="text" class="input-inner" placeholder="请输入订单号" ref="inputValue">
          <span class="button" @click="getInputValue">确 定</span>
        </div>
      </div>
      <div class="gb-layer" @click="open"></div>
    </div>
  </div>
</template>

<script>
import topHeader from "@/components/topHeader.vue";
import { polling } from "@/services/polling.js";


export default {
  name: "purchase",
  components: {
    topHeader,
  },
  data() {
    return {
      hotArea:1,
      oldStatus:1,
      orderId:'',
      dialogVisibility:false,
      timer:null,
      canRun:null,
      status:0, // 1: 采购申请; 2: 采购申请接收审批; 3: 采购订单; 4: 采购到货; 5: 检验; 6: 采购入库; 7:结束
      dataV:{ 
        header1:[ "序号", "物料名称", "数量"],
        header3:[ "序号", "批次号", "质检员", "生成检验报告时间","审核完成报告时间"],
        header4:[ "序号", "操作人", "入库时间", "批次号"]
      },
      title:{},
      tableData: {
        header: [],
        listData: [],
      },
    }
  },
  mounted() {
    // this.polling(this.orderId)
  },
  filters:{
    tableTitle(status) {
      let arr = ['','采购申请', '采购申请接收审批', '采购订单', '采购到货', '检验', '采购入库', '采购入库'];
      return arr[status]
    }
  },
  computed: {
    titleName() {
      return this.$route.meta.title;
    },
    introText() {
      return this.$route.meta.intro;
    },
  },
  methods:{
    /**
     *  hotArea { 0: 请求失败, 1:请求成功, 2:请求失败，倒计时结束}
     */
    loopsiloop(){
      clearInterval(this.timer);
      this.timer = setInterval( ()=> {
        this.polling(this.orderId)
      },5000)
    },
    async polling(orderId) {
      clearInterval(this.timer);
      let { data, ok } = await polling.getPurchasePolling(orderId);
      if(!ok || data.data == null ) {
        alert("数据为空")
        this.hotArea = 0;
        return 
      }; 
      this.hotArea = 1;
      this.oldStatus = data.data.flag
      this.status = data.data.flag + 1;
      if( [1,2,3,4].includes(data.data.flag) ) {
        this.tableData = {
          header:this.dataV.header1,
        }
      }else if ( data.data.flag == 5 ) {
        this.tableData = {
          header:this.dataV.header3,
        }
      }else if( data.data.flag == 6 ) {
        this.tableData = {
          header:this.dataV.header4,
        }
      } else {
        return false
      }
      this.title = {
        createName:data.data.createName,
        createTime:data.data.createTime,
      }
      this.tableData.listData = data.data.list;
      this.loopsiloop()
    },
    
    open() {
      this.dialogVisibility = !this.dialogVisibility;
      this.$refs.inputValue.value = '';
    },
    getInputValue() {
      if(!this.$refs.inputValue.value) { return alert('不能为空')}
      this.orderId = this.$refs.inputValue.value;
      this.polling(this.orderId)
      this.open()
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
}
</script>

<style lang='less' scoped>
@tipWrap-H:125px;
@tipWrap-W:240px;
.energyConsumMonitor {
  height: 1080px;
  width: 1920px;
  box-sizing: border-box;
  .title-size {
    font-size: 2.5rem;
  }
  .intro-size {
    font-size: 1rem;
  }
  .layout-content {
    height: 958px;
    width: 1880px;
    .flowChart {
      height: 100%;
      width: 100%;
      background: url(../assets/images/erp-bg.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      .input-layer {
        position: absolute;
        top: 20px;
        left: 40px;
        font-size: 1.5rem;
        background: #0091ff;
        width: 80px;
        height: 38px;
        line-height: 38px;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
      }
      .tip-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        .column {
          position: absolute;
          top: 190px;
          left: 355px;
          height: 670px;
          width: 300px;
          .rectangle,.diamond {
            left: 50%;
            transform: translateX(-50%);
            &.top {
              top: -23px;
            }
            &.center{
              top: 225px;
              left: 52%;
            }
            &.bottom {
              bottom: 64px;
            }
          }
        }
        .rows {
          position: absolute;
          height: 15%;
          width: 70%;
          bottom: 16%;
          right: 5%;
          .rectangle,.ellipse {
            top: 50%;
            transform: translateY(-50%);
            &.bottom1 {
              left: 16.5%;
            }
            &.bottom2 {
              left: 517px;
            }
            &.bottom3 {
              right: 259px;
            }
            &.bottom4 {
              right: -39px;
            }
          }
        }
        .rectangle,.ellipse,.diamond {
          position: absolute;
          width: @tipWrap-W;
          height: @tipWrap-H;
        }
        .rectangle {
          background:url(../assets/images/rectangle.png) no-repeat;
          background-size: cover;
          &.rectangleActive {
            background:url(../assets/images/rectangle-high.png) no-repeat;
            background-size: cover;
            animation: shina 2s infinite;
          }
        }
        .ellipse {
          background:url(../assets/images/ellipse.png) no-repeat;
          background-size: cover;
           &.ellipseActive {
            background:url(../assets/images/ellipse-high.png) no-repeat;
            background-size: cover;
            animation: shina 2s infinite;
          }
        }
        .diamond {
          background:url(../assets/images/diamond.png) no-repeat;
          background-size: cover;
           &.diamondActive {
            background:url(../assets/images/diamond-high.png) no-repeat;
            background-size: cover;
            animation: shina 2s infinite;
          }
        }
      }
      .backgroundChart-text {
        height: 100%;
        width: 100%;
        background: url(../assets/images/background-text.png) no-repeat;
        background-size: 100% 100%;
      }
      .layout-wrap {
        // width: 55%;
        max-width: 50%;
        min-width: 40%;
        height: 40%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-40%);
        .header-layer {
          width: 100%;
          height: 10%;
          margin: 0.5rem;
          background:linear-gradient(to right; rgba(11,52,82,.5) 0%, rgba(47,80,103, .6) 40%; rgba(47,80,103, .6) 60%,  rgba(11,52,82,.5) 100%); 
          display: flex;
          align-items: center;
          p {
            flex: 1;
            font-size: 1.5rem;
            box-sizing: border-box;
            padding: 0 0.5rem;
            span{
              color: #0091ff;
            }
          }
        }
        .seamless-wrap {
          position: relative;
          height: 88%;
          .seamless {
            position: relative;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .dialog {
    height: 1080px;
    width: 1920px;
    position: absolute;
    top: 0;
    left: 0;
    .input-wrap {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 200px;
      background: rgba(52,93,130,.5);
      border: 1px solid #64A9EF;
      border-radius: 5px;
      z-index: 2001;
      box-shadow: 0 0 10px 2px rgba(0,0,0,.5);
      display: flex;
      align-items: center;
      justify-content: center;
      .input-inner-wrap {
        // width: 100%;
        height: 50px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        .input-inner {
          height: 40px;
          width: 200px;
          font-size: 16px;
        }
        .button {
          margin-left: 15px;
          display: inline-block;
          border-radius: 5px;
          width: 80px;
          height: 45px;
          background: #447FC8;
          color: #fff;
          font-size: 18px;
          line-height: 45px;
          text-align: center;
          &:hover {
            cursor: pointer;
          }
          // box-shadow: 0 0 10px 2px rgba(0,0,0,.5);
        }
      }
      
    }
   .gb-layer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:rgba(0,0,0,.8);
    z-index: 2000;
    transition: opacity 0.3s linear;
   }
  }

  @keyframes shina{
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
 
}
</style>