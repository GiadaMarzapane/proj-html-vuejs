<script>
import AppCollection from './AppCollection.vue';
import AppMiddleSection from './AppMiddleSection.vue';
import AppFeaturedProducts from './AppFeaturedProducts.vue';
    
    export default{
        name: 'AppMain',
        components: {
            AppCollection,
            AppMiddleSection,
            AppFeaturedProducts
        }
    }

</script>

<template>
    
    <!-- FEATURED PRODUCTS -->
    <section>
    </section>
    <!-- COLLECTION -->
    <AppFeaturedProducts />
    <AppCollection />
    <AppMiddleSection />

</template>

<style lang="scss" scoped>
    h1{
        color: $my-blue;
    }
</style>