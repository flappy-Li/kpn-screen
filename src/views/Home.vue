<template>
  <div class="home default-layout">
   <router-view></router-view>
  </div>
</template>

<script>

// @ is an alias to /src
export default {
  name: 'Home',
}
</script>
<style lang="less">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  
}
</style>
