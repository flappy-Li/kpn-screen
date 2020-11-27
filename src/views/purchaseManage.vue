<template>
  <div class="purchaseManage default-layout">
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
      <div class="top-content rows-flex">
        <data-info-tip
          v-for="item in dataList"
          :key="item.title"
          :list="item"
        />
      </div>
      <div class="center-content rows-flex">
        <div class="bar-wrap wrap-style">
          <div class="hander-top square-wrapBg">原纱每日采购量与库存</div>
          <div class="echarts-wrap">
            <sz-bar></sz-bar>
          </div>
        </div>
        <div class="layout-wrap wrap-style column-flex">
          <div class="hander-top square-wrapBg">采购降本分析</div>
          <div class="seamless-wrap">
            <div class="seamless">
              <seamless :table-list="tableColor"></seamless>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-content rows-flex">
        <div class="bar-wrap rows-flex">
          <div class="bottom-ecarts wrap-style">
            <div class="hander-top square-wrapBg">近30天分工厂采购量</div>
            <div class="echarts-wrap">
              <rankingbar/>
            </div>
          </div>
          <div class="bottom-ecarts wrap-style">
            <div class="hander-top square-wrapBg">供应商准时交互率</div>
            <div class="echarts-wrap">
              <rankingbar />
            </div>
          </div>
        </div>
        <div class="bottom-ecarts wrap-style">
          <div class="hander-top square-wrapBg">日采购金额走势图</div>
          <div class="echarts-wrap">
            <line-echart :options="echartConfig" :data-list="echartsData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "@/components/topHeader.vue";
import dataInfoTip from "@/components/dataCase/dataInfoTip.vue";
export default {
  name: "purchaseManage",
  components: {
    topHeader,
    dataInfoTip,
  },
  data() {
    return {
      dataList: [
        {
          title: "月采购金额",
          numTitle: "数值：",
          num: 1212.2,
          unit: "元",
          type: false,
        },
        {
          title: "日采购金额",
          numTitle: "数值：",
          num: 1212.2,
          unit: "元",
          type: false,
        },
        {
          title: "日到货金额",
          numTitle: "数值：",
          num: 1212.2,
          unit: "元",
          type: false,
        },
        {
          title: "待结算金额",
          numTitle: "数值：",
          num: 1212.2,
          unit: "元",
          type: false,
        },
      ],
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
      echartConfig: {
        name: "单位：万",
        status: false,
        toolStyle: ["#4efeea", "#258177"],
        lineStyle: ["#539aed"],
        areaStyle: [[`rgba(46, 36, 130, 0.8)`, ` rgba(41, 71, 125, 0.6)`]],
      },
      echartsData: {
        x: [
          "2020-11-05",
          "2020-11-04",
          "2020-11-03",
          "2020-11-02",
          "2020-11-01",
        ],
        y: [
          {
            name: "日销售额",
            type:'line',
            value: [100, 545, 454, 212, 212],
          },
           {
            name: "月销售额",
            type:'line',
            value: [100, 545, 454, 212, 212],
          },
        ],
      },
    };
  },
  computed: {
    titleName() {
      return this.$route.meta.title;
    },
    introText() {
      return this.$route.meta.intro;
    },
  },
};
</script>

<style lang='less' scoped>
.purchaseManage {
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
    .top-content {
      width: 100%;
    }
    .center-content {
      height: 42%;
      .bar-wrap {
        position: relative;
        width: 54.5%;
        height: 100%;
      }
      .layout-wrap {
        width: 45%;
        height: 100%;
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
    .bottom-content {
      height: 42%;
      width: 100%;
      .bar-wrap {
        position: relative;
        width: 54.5%;
        height: 100%;
        .bottom-ecarts {
            width: 49.5%;
        }
      }
      .top-wrap,
      .bottom-ecarts {
        height: 100%;
        width: 45%;
      }
    }
  }
  .echarts-wrap {
    position: relative;
    height: 90%;
    width: 100%;
  }
}
</style>