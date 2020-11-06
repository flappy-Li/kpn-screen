<!--
 描述: 排名柱状图
 作者: li
 日期: 2020-11-6
-->

<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="chartsdom" ref="chart_rankingbar"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
export default {
  name: "rankingbar",
  mounted() {
    this.initBar();
  },
  methods: {
    initBar() {
      let data = [
        { code: "600519", stock: "aaa", fundPost: "21.987691" },
        { code: "000858", stock: "bbb", fundPost: "20.377176" },
        { code: "002475", stock: "ccc", fundPost: "19.127404" },
        { code: "600276", stock: "ddd", fundPost: "18.40882" },
        { code: "601318", stock: "eee", fundPost: "17.980597" },
        { code: "000661", stock: "fff", fundPost: "16.957898" },
        { code: "000333", stock: "ggg", fundPost: "15.099577" },
        { code: "300760", stock: "eee", fundPost: "14.76103" },
        { code: "300750", stock: "ttt", fundPost: "13.002175" },
        { code: "601888", stock: "fff", fundPost: "12.133536" },
      ];
      function contains(arr, dst) {
        var i = arr.length;
        while ((i -= 1)) {
          if (arr[i] == dst) {
            return i;
          }
        }
        return false;
      }

      var attackSourcesColor = [
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#EB3B5A" },
          { offset: 1, color: "#FE9C5A" },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#FA8231" },
          { offset: 1, color: "#FFD14C" },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#F7B731" },
          { offset: 1, color: "#FFEE96" },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#395CFE" },
          { offset: 1, color: "#2EC7CF" },
        ]),
      ];
      var attackSourcesColor1 = [
        "#EB3B5A",
        "#FA8231",
        "#F7B731",
        "#3860FC",
        "#1089E7",
        "#F57474",
        "#56D0E3",
        "#1089E7",
        "#F57474",
        "#1089E7",
        "#F57474",
        "#F57474",
      ];
      var attaData = [];
      var attaName = [];
      var topName = [];
      data.forEach((it, index) => {
        attaData[index] = parseFloat(it.fundPost).toFixed(2);
        attaName[index] = it.stock;
        topName[index] = `${it.code} ${it.stock}`;
      });
      var salvProMax = []; //背景按最大值
      for (let i = 0; i < attaData.length; i++) {
        salvProMax.push(attaData[0]);
      }
      function attackSourcesDataFmt(sData) {
        var sss = [];
        sData.forEach(function (item, i) {
          let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
          };
          sss.push({
            value: item,
            itemStyle: itemStyle,
          });
        });
        return sss;
      }

      var option = {
        // backgroundColor: "#000",
        tooltip: {
          show: false,
          backgroundColor: "rgba(3,169,244, 0.5)", //背景颜色（此时为默认色）
          textStyle: {
            fontSize: 16,
          },
        },
        color: ["#F7B731"],
        // legend: {
        //   pageIconSize: [12, 12],
        //   itemWidth: 20,
        //   itemHeight: 10,
        //   textStyle: {
        //     //图例文字的样式
        //     fontSize: 10,
        //     color: "#fff",
        //   },
        //   selectedMode: false,
        //   data: ["个人所得(亿元)"],
        // },
        grid: {
          bottom: "2%",
          top: "8%",
          containLabel: false,
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: true,
          },
          axisLabel: {
            show: true,
          },
          axisTick: {
            show: true,
          },
          axisLine: {
            show: true,
          },
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: true,
            },
            axisTick: {
              show: true,
            },
            axisPointer: {
              label: {
                show: true,
                //margin: 30
              },
            },
            pdaaing: [5, 0, 0, 0],
            postion: "right",
            // data: attaName,
            axisLabel: {
              margin: 30,
            //   fontSize: 10,
              align: "left",
              padding: [2, 0, 0, 0],
              color: "#000",
            },
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#fff",
                // fontSize: "10",
              },
            },
            data: attackSourcesDataFmt(attaName),
          },
          {
            //名称
            type: "category",
            offset: -10,
            position: "left",
            axisLabel: {
              color: `#fff`,
            //   fontSize: 10,
            },
            axisLine: {
              show: false,
            },
            inverse: false,
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: ["#fff"],
              align: "left",
              verticalAlign: "bottom",
              lineHeight: 32,
            //   fontSize: 10,
            },
            data: topName,
          },
        ],
        series: [
          {
            zlevel: 1,
            type: "bar",
            barWidth: "15px",
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: "center",
            label: {
              show: true,
              fontSize: 10,
              color: "#fff",
              textBorderWidth: 2,
              padding: [2, 0, 0, 0],
            },
          },
          {
            type: "bar",
            barGap: "-100%",
            margin: "20",
            data: salvProMax,
            textStyle: {
              //图例文字的样式
              fontSize: 10,
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: "transparent",
                //width:"100%",
                fontSize: 10,
              },
            },
          },
        ],
      };
      let myChart = this.$echarts.init(this.$refs.chart_rankingbar);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.chartsdom {
  width: 100%;
  height: 100%;
}
</style>