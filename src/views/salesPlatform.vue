<template>
  <div class="default-layout">
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
    <div class="layout-content constructor-layout ">
      <div class="top-content  rows-flex ">
          <dataInfo-tip 
            v-for="item in dataList"
            :key="item.title"
            :list='item'
          />
      </div>
      <div class="bottom-content rows-flex">
        <div class="map-wrap constructor-shadow">
          <div class="rectangle-wrapBg">销售情况分布</div>
          <div id=""></div>
        </div>
        <div class="list-wrap column-flex">
          <div class="top-wrap">
            <div class="square-wrapBg">销量TOP10</div>
          </div>
          <div class="bottom-ecarts">
            <div class="square-wrapBg">日销售额走势</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import topHeader from "@/components/topHeader.vue";
import dataInfoTip from "@/components/dataCase/dataInfoTip.vue";


export default {
  name: "Home",
  data() {
    return {
      dataList:[
        {
          title:'年销售',
          num:1212.2
        },{
          title:'月销售',
          num:1212.2
        },{
          title:'周销售',
          num:1212.2
        },{
          title:'日销售',
          num:1212.2
        }
      ]
    }
  },
  components: {
    topHeader,
    dataInfoTip
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

<style lang='less'>
.default-layout {
  height: 100%;
  width: 100%;
  background: url(../assets/images/bg.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
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
    .bottom-content {
      height: 85%;
      width: 100%;
      .map-wrap,
      .list-wrap {
        width: 49%;
        height: 100%;
      }
    }
  }
}
</style>