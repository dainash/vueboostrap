<template>
<div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
</div>
</template>
<script>
import navMenu from '../components/navmenu.vue'
export default {
    name: 'app',
    components: {
        navMenu
    }
}
</script>

<style>

</style>
