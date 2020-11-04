<template>
    <div class="homeNav">
        <router-link 
            v-for= "item in routeList"
            v-show="item.name != 'Home'"
            :key="item.name"
            :to=item.name
        >{{item.meta && item.meta.title}}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        routeList() {
            return this.$router.options.routes
        }
    },
}
</script>

<style lang="less">
    .homeNav {  
        height: 100%;
        width: 100%;
    }
</style>