<script>
import AppCollection from './AppCollection.vue';
import AppMiddleSection from './AppMiddleSection.vue';
    
    export default{
        name: 'AppMain',
        components: {
            AppCollection,
            AppMiddleSection
        }
    }

</script>

<template>
    
    <!-- FEATURED PRODUCTS -->
    <section>
    </section>
    <!-- COLLECTION -->
    <AppCollection />
    <AppMiddleSection />

</template>

<style lang="scss" scoped>
    h1{
        color: $my-blue;
    }
</style>