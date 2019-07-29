<template>
    <div>
        <Header title="喵喵影院"/>
        Hello Cinema
        <TabBar />
    </div>
</template>

<script>
// 引入header组件
import Header from '@/components/Header';
// 引入TabBar组件
import TabBar from '@/components/TabBar';
    export default {
        name: "Cinema",
        components: {
            Header,
            TabBar
        }
    }
</script>

<style lang="scss" scoped>

</style>