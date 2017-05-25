<template lang="html">
    <div class="navigator">
        <Menu mode="horizontal" :theme="theme1" active-name="0">
            <a href="/">
                <Menu-item name="0">
                    容灾平台
                </Menu-item>
            </a>
        </Menu>
        <br>
    </div>
</template>

<script>
export default {
    name: 'navigator',
    data() {
        return {
            theme1: 'light'
        }
    },
    methods: {

    }
}
</script>

<style lang="less">
.nothing {
    color: #333;
}
</style>
