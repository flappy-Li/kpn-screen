<template>
    <div class="salesPlatform default-layout">
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
            <div class=""></div>
        </div>
    </div>
</template>

<script>
import topHeader from "@/components/topHeader.vue";
export default {
    name: "purchasePoll",
    data() {
         return {

         }
     },
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
}
</script>

<style lang='less' scoped>
.salesPlatform{
  height: 100%;
  width: 100%;
  .title-size {
    font-size: 2.5rem;
  }
  .intro-size {
    font-size: 1rem;
  }
  .layout-content {
    height: 89%;
    width: 98%;
  }
}
</style>