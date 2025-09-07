<template>
    <div>
        <h1>{{ sum }}</h1>
        <button @click="add">sum++</button>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'Person',
    methods: {
        add() {
            this.sum++
        }
    },
    data() {
        return {
            sum: 0
        }
    },
    // 创建前
    beforeCreate() {
        console.log('beforeCreate')
    },
    // 创建完成
    created() {
        console.log('created')
    },
    // 挂载前
    beforeMount() {
        console.log('beforeMount')
    },
    // 挂载完成
    mounted() {
        console.log('mounted')
    },
    // 更新前
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    // 更新完成
    updated() {
        console.log('updated')
    },
    // 销毁前
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    // 销毁完成
    destroyed() {
        console.log('destroyed')
    }
}
</script>