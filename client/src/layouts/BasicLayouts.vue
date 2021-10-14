<template>
    <div class ="basic-layout">
        <Menu/>>

        <div class = "ui container">
            <slot/>
        </div>
    </div>

    <div class ="basic-layout">
        <Footer/>        
    </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "BasicLayouts",
    components: {
        Menu,
        Footer,
    },
};

</script>

<style>

</style>