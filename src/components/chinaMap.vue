<template>
  <div id="chinaMap" ref="myEchart"></div>
</template>

<script>
import "@/assets/js/china.js";
let Echarts;
export default {
  props: {
    mapDataList: {
      type: Array,
      default() {
        return [
          {
            value: [117.2159, 37.08609, 1000, 1],
          },
        ];
      },
    },
  },
  name:'chinaMap',
  data() {
    return {
      city: {
        china: "china",
      },
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let map = this.$refs.myEchart;
      Echarts = this.$echarts.init(map); // eslint-disable-line no-unused-vars
      // var regionsData = china.features.map(function (feature, index) {
      //   return {
      //     name: feature.properties.name,
      //     value: city[index].value[3],
      //     height: feature.properties.height || 10,
      //     itemStyle: {
      //       areaColor: feature.properties.color,
      //       opacity: 1,
      //       borderWidth: 1,
      //       borderColor: "#4dffe1", //省市边界线
      //     },
      //   };
      // });
      var option = {
        geo3D: {
          name: "中国",
          map: this.city.china, //地图类型。echarts-gl 中使用的地图类型同 geo 组件相同
          regionHeight: 4, //模型的高度
          top: "-10%",
          roam: true,
          boxDepth: 90,
          boxHeight:10,
          shading: 'lambert',
          selectedMode:'single',
          label: {
            show: false, //是否显示标签。
            position: ["50%", "50%"],
            formatter: (params) => {
              params.name;
            },
            textStyle: {
              color: "rgba(255,255,255,0.65)", //地图初始化区域字体颜色
              fontSize: 16,
              opacity: 1,
              backgroundColor: "#1B212B ",
              borderColor: "#998484",
              borderWidth: 1,
              position: "insideTop",
              padding: [6, 8],
              borderRadius: 0,
              distanca: 20,
            },
            emphasis: {
              //对应的鼠标悬浮效果
              show: false,
              // textStyle: { color: "blue" }
            },
          },
           light: {
                main: {
                    intensity: 1.2,
                    shadow: false,
                },
                ambient: {
                    intensity: 0.5
                },
                ambientCubemap: {
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            },
          viewControl: {
            distance: 115,
            rotateSensitivity: 0,
            zoomSensitivity: 0,
            alpha: 65,
            beta: 10,
          },
          itemStyle: {
            //静态模式下显示的默认样式
            borderWidth: 1,
            borderColor: "#95FFFF",
            areaColor: "#3797e8",
            color: '#3797e8',
            emphasis: {
              // 鼠标移上去的样式
              borderWidth: 1,
              borderColor: "#95FFFF",
              areaColor: "#3797e8",
              
              textStyle: {
                // color:'blue'
              },
            },
          },
        },
        series: [
          {
            name: "点",
            type: "scatter3D",
            coordinateSystem: "geo3D",
            symbol: "circle",
            symbolSize: [10, 25],
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: "#F62157", //标志颜色
              },
            },
            zlevel: 100,
            // data: this.mapDataList,
            animationDurationUpdate: 3000,
          },
        ],
      };
      Echarts.setOption(option);
      window.onresize = Echarts.resize();
    },
  },
};
</script>

<style>
</style>