<template>
  <div class="data-content">
    <slot name="title-text"></slot>
    <div class="data">
      <slot name="data-title"></slot>
      <slot name="data-num"></slot>
      <slot name="data-num2">
        <slot name="data-unit"></slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.data-content {
  width: 100%;
  height: 100%;
  padding-left: 1%;
  box-sizing: border-box;
  .data {
    padding-top: 5%;
    position: relative;
  }
}
</style>