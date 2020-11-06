<!--
 描述: 无缝滚动
 作者: li
 日期: 2020-11-5
-->

<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="wrap-container">
        <div class="table">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="table-header"
          >
            <tbody>
              <tr>
                <td v-for="item in tableList.header" :key="item">
                  <span>{{ item }}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <vue-seamless-scroll
            :data="tableList.listData"
            class="seamless-warp"
            :class-option="optionSetting"
          >
            <table border="0" cellpadding="0" cellspacing="0" class="item">
              <tbody>
                <tr v-for="(item, index) in tableList.listData" :key="index">
                  <td>
                    <span   
                      :class="{
                        colorRed: index <= 3,
                        colorOrange: index > 3,
                      }"
                      >{{ ++index }}</span>
                  </td>
                  <td v-for="prop in item" :key="prop">
                    <span>{{ prop}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll,
  },
  props: {
    tableList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {},
  methods: {},
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
// 部分样式来自 公共基础样式库
.table-style {
  width: 100%;
  height: 3rem;
  table-layout: fixed;
  text-align: center;
  tr {
    td {
      text-align: center;
      background-color: transparent;
      white-space: nowrap;
      overflow: hidden;
      color: #e2e5ff;
    }
  }
}
.sn-container {
  .table {
    .table-header {
      &:extend(.table-style);
      border: 0.1rem solid #539aed;
      background-color: rgba(83, 154, 237, 0.5);
      border-radius: 0.3rem;
      font-size: 1.5rem;
      white-space: nowrap;
    }
    .seamless-warp {
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #ff4669;
      }
      .colorOrange {
        color: #ffc956;
      }
      .item {
        // height: auto;
        &:extend(.table-style);
        border-radius: 0.5rem;
      
        tr {
          height: 3rem;
          td {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
        tr:nth-child(odd) td {
          background-color: rgba(83, 154, 237, 0.2);
        }
      }
    }
  }
}
</style>
