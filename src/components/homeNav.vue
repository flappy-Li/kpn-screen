<template>
    <div class="homeNav ">
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
        margin: auto;
        text-align: center;
        a {
            padding: 1rem;
            font-size: 3rem;
            font-family: 'txwhgzb';
            color: #b5d5ec;
             text-shadow: 4px 4px 0px #000, 8px 8px 0px rgba(255, 255, 255, 0.3);
        }
    }
</style>