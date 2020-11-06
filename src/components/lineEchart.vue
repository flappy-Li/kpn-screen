<!--
 描述: 折线图
 作者: li
 日期: 2020-11-6
-->

<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="lineEchart" ref="lineEchart"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
export default {
  name: "lineEchart",
  props: {
    dataList: {
      type: Object,
      default() {
        return {};
      },
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initLineEchart(this.dataList, this.options);
  },
  methods: {
    initLineEchart(data, options) {
      let serves = [];
      data.y.forEach((element, index) => {
        serves.push({
          name: element.name,
          data: element.value,
          type: "line",
          hoverAnimation: false,
          showAllSymbol: false,
          showSymbol: false,
          // symbol: 'circle',
          // symbolSize: 10,
          itemStyle: {
            color: options.lineStyle[index],
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: options.areaStyle[index][0] }, // 0 起始颜色
                { offset: 1, color: options.areaStyle[index][1] }, // 1 结束颜色
              ]
            ),
          },
        });
      });
      var option = {
        xAxis: {
          type: "category",
          axisTick: {
            show: true, //去除刻度线
          },
          axisLine: {
            lineStyle: {
              color: "#539aed",
              type: "solid",
            },
          },
          axisLabel: {
            color: "#fff", //文本颜色
          },
          boundaryGap: false, //去除轴内间距
          data: data.x,
        },
        yAxis: {
          name: options.name,
          nameTextStyle: {
            color: "#fff",
            fontSize: 14,
            lineHeight: 40
        },
          type: "value",
          axisTick: {
            show: true,
          },
          axisLine: {
            show: true, //去除轴线
            lineStyle: {
              type: "solid",
              color: "#539aed",
            },
          },
          axisLabel: {
            color: "#fff", //文本颜色
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "solid",
              color: "#1f5f5a",
            },
          },
          boundaryGap: false, //去除轴内间距
        },
        legend: {
          show:options.status,
          top: "5%",
          right: "5%",
          data: [data.y[0].name],
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          alwaysShowContent: false,
          axisPointer: {
            lineStyle: {
              width: 2,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: options.toolStyle[0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: options.toolStyle[1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          position: function (pt) {
            return [pt[0], 130];
          },
          confine: true,
          padding: 10,
          formatter: `${data.y[0].name}: {c}万`,
          extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
          backgroundColor: "rgba(28, 81, 76, 0.5)",
        },
        grid: {
          show: false,
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true, // 包含刻度文字在内
        },
        series: serves,
        animationDuration: 3000,
      };
      var myechart = this.$echarts.init(this.$refs.lineEchart);
      myechart.setOption(option);
       window.addEventListener("resize", () => {
        myechart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.lineEchart {
  height: 100%;
  width: 100%;
}
</style>