<template>
  <div class="home">
    <home-nav></home-nav>
  </div>
</template>

<script>

// @ is an alias to /src
import homeNav from '@/components/homeNav.vue'

export default {
  name: 'Home',
  components: {
    homeNav
  }
   
}
</script>
<style lang="less">
.home {
  height: 100%;
  width: 100%;
  
}
</style>
