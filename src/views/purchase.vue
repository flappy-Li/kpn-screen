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
          <div class="backgroundChart-text"></div>
          <div class="tip-layer">
            <div class="column">
              <div class="rectangle top rectangleActive"></div>
              <div class="diamond center diamondActive"></div>
              <div class="rectangle bottom"></div>
            </div>
            <div class="rows">
              <div class="rectangle bottom1"></div>
              <div class="rectangle bottom2"></div>
              <div class="rectangle bottom3"></div>
              <div class="rectangle bottom4"></div>
            </div>
          </div>
          <div class="layout-wrap wrap-style column-flex">
            <div class="hander-top square-wrapBg">采购降本分析</div>
              <div class="header-layer">
                <p>操作人：<span>12456</span></p>
                <p>创建时间：<span>12456</span></p>
                <p>审批时间：<span>12456</span></p>
              </div>
              <div class="seamless-wrap">
                <seamless :table-list="tableColor"></seamless>
              </div>
          </div>
        </div>
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
      tableColor: {
        header: [
          "能源类型",
          "所在地",
          "能耗量",
          "比前一日能耗变化",
          "能耗总价",
          "日期",
        ],
        listData: [
          {
            title: "钱花哪了?一图带你读懂年轻人的消费观",
            date: "2020-05-05",
            hot: 2306,
          },
          {
            title: "“五一”假期前三天国内旅游收入超350亿元",
            date: "2020-05-02",
            hot: 5689,
          },
          {
            title: "滴滴、美团、哈啰交战，本地生活会是终局？",
            date: "2020-05-02",
            hot: 9,
          },
          {
            title: "“互联网+文化”逆势上行文娱消费云端真精彩",
            date: "2020-04-25",
            hot: 288,
          },
          {
            title: "乐观还是悲观？巴菲特是个现实主义者！",
            date: "2020-04-21",
            hot: 158,
          },
          {
            title: "B站的后浪，会把爱优腾拍在沙滩上吗?",
            date: "2020-04-20",
            hot: 889,
          },
          {
            title: "华为如何做投资的：先给两亿订单一年上市",
            date: "2020-04-01",
            hot: 5800,
          },
          {
            title: "马斯克：特斯拉股价太高了，我要卖豪宅",
            date: "2020-03-25",
            hot: 6,
          },
          {
            title: "人民日报海外版：云模式巧解“就业难”",
            date: "2020-03-16",
            hot: 88,
          },
          {
            title: '刚刚港股"崩了"：狂跌近1000点！',
            date: "2020-03-12",
            hot: 88,
          },
          {
            title: "个人健康信息码国家标准发布",
            date: "2020-02-28",
            hot: 5,
          },
          {
            title: "传软银国际裁员约10%两名管理合伙人离职",
            date: "2020-02-15",
            hot: 258,
          },
          {
            title: "27万个岗位：区块链、人工智能等专场招聘",
            date: "2020-02-10",
            hot: 198,
          },
          {
            title: "一季度电商发展势头迅猛农村电商破1300万家",
            date: "2020-02-08",
            hot: 19,
          },
        ],
      },
    }
  },
  created(){
    // this.loopsiloop()
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
    loopsiloop(){
      let hotArea = 0; 
      setTimeout(()=>{
        hotArea = 1;
        this.loopsiloop()
      }, 5000);
      new Promise((resolve, reject) => {
        resolve(1);
      }).then((res) => {
        return new Promise((resolve,reject)=>{
          let tick = 10; // set 10 seconds
          let callBackFunction = function(){
            // check if hotArea is hit
            if(hotArea===1){
              let res = hotArea;
              hotArea = 0;
              clearInterval(timer);
              return resolve(res)
            }else{
              tick = tick-1;
              console.log('not found! ETA:',tick)
              if(tick<0){
                clearInterval(timer);
                return resolve('timeOut!')
              }
            }
          };
          let timer = setInterval(callBackFunction, 1000);
        })
      }).then((res) => {
        console.log('timer generates: ',res);
      });
    },
    async polling() {
      let { data, ok } = await polling.getPurchasePolling();
      if(!ok) return; 
    }
  }
}
</script>

<style lang='less' scoped>
@tipWrap-H:90px;
@tipWrap-W:170px;
.energyConsumMonitor {
  height: 100%;
  width: 100%;
  .title-size {
    font-size: 3rem;
  }
  .intro-size {
    font-size: 1rem;
  }
  .layout-content {
    height: 89%;
    width: 98%;
    .flowChart {
      height: 100%;
      width: 100%;
      background: url(../assets/images/wrap-background.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      .tip-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .column {
          position: absolute;
          top: 15%;
          left: 21.8%;
          height: 70%;
          width: 10%;
          .rectangle,.diamond {
            left: 50%;
            transform: translateX(-50%);
            &.top {
              top: 3%;
            }
            &.center{
              top: 40.5%;
              left: 53%;
            }
            &.bottom {
              bottom: 3%
            }
          }
        }
        .rows {
          position: absolute;
          height: 15%;
          width: 70%;
          bottom: 16%;
          right: 5%;
          .rectangle {
            top: 50%;
            transform: translateY(-50%);
            &.bottom1 {
              left: 16.5%;
            }
            &.bottom2 {
              left: 39.5%;
            }
            &.bottom3 {
              right: 20%;
            }
            &.bottom4 {
              right: -3%;
            }
          }
        }
        .rectangle {
          position: absolute;
          width: @tipWrap-W;
          height: @tipWrap-H;
          background:url(../assets/images/rectangle.png) no-repeat;
          background-size: 100% 100%;
          &.rectangleActive {
            background:url(../assets/images/rectangle-high.png) no-repeat;
            background-size: 100% 100%;
          }
        }
        .diamond {
          position: absolute;
          width: @tipWrap-W;
          height: @tipWrap-H;
          background:url(../assets/images/diamond.png) no-repeat;
          background-size: 100% 100%;
           &.diamondActive {
            background:url(../assets/images/diamond-high.png) no-repeat;
            background-size: 100% 100%;
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
 
 
}
</style>