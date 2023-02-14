<script>
import AppCollection from './AppCollection.vue';
import AppMiddleSection from './AppMiddleSection.vue';
import AppFeaturedProducts from './AppFeaturedProducts.vue';
import AppBestSeller from './AppBestSeller.vue';
    
    export default{
        name: 'AppMain',
        components: {
            AppCollection,
            AppMiddleSection,
            AppFeaturedProducts,
            AppBestSeller
        }
    }

</script>

<template>
    
    <AppFeaturedProducts />
    <AppCollection />
    <AppMiddleSection />
    <AppBestSeller />

</template>

<style lang="scss" scoped>
    h1{
        color: $my-blue;
    }
</style>