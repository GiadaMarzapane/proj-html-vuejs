<script>
import AppCollection from './AppCollection.vue';
import AppMiddleSection from './AppMiddleSection.vue';
import AppFeaturedProducts from './AppFeaturedProducts.vue';
import AppBestSeller from './AppBestSeller.vue';
import AppNewArrivals from './AppNewArrivals.vue';
import AppOpinions from './AppOpinions.vue';
import AppBlog from './AppBlog.vue';

    export default{
        name: 'AppMain',
        components: {
            AppCollection,
            AppMiddleSection,
            AppFeaturedProducts,
            AppBestSeller,
            AppNewArrivals,
            AppOpinions,
            AppBlog
        }
    }

</script>

<template>
    
    <AppFeaturedProducts />
    <AppCollection />
    <AppBestSeller />
    <AppMiddleSection />
    <AppNewArrivals />
    <AppOpinions />
    <AppBlog />

</template>

<style lang="scss" scoped>
    h1{
        color: $my-blue;
    }
</style>