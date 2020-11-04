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
    <div class=""></div>
  </div>
</template>
<script>
// @ is an alias to /src
import topHeader from "@/components/topHeader.vue";

export default {
  name: "Home",
  components: {
    topHeader,
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
}
</style>