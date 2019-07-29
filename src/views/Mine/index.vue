<template>
    <div>
        <Header title="我的"/>
        Hello Mine
        <TabBar />
    </div>
</template>

<script>
// 引入header组件
import Header from '@/components/Header';
// 引入TabBar组件
import TabBar from '@/components/TabBar';
    export default {
        name: "Mine",
        components: {
            Header,
            TabBar
        }
    }
</script>

<style lang="scss" scoped>

</style>