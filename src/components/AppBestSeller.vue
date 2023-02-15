<script>

    import { store } from '../store';

    export default {
        name: 'AppBestSeller',
        data() {
            return {
                store,
            }
        },
        methods:{
            getImgPath(myPath){
                return new URL(myPath, import.meta.url).href
            },
        }
    }
</script>

<template>
    <section class="py-5 w-100 position-relative">
        <div class="line">
            <div class="line-one"></div>
            <div class="line-two"></div>
            <div class="line-three"></div>
        </div>
        <div class="text-center w-75 mx-auto">
            <div>
                <h3 class="font-weight-600">Best Seller</h3>
                <h6 class="mb-5">Must have products from our top sellers</h6>
            </div>
            <div class="my-container d-flex">
                <div class="next">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </div>
                <div class="previous">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </div>
                <template v-for="element in store.bestSeller">
                    <div v-if="element.visible">
                        <img :src="getImgPath(`${element.img_path}`)" alt="">
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h6{
    font-size: 0.75rem;
    color: $my-dark-gray;
}
.my-container{
    max-width: fit-content;
    margin: 0 auto;
    position: relative;
}
.next, .previous{
    height: fit-content;
    background: $my-light-gray;
    padding: 20px 10px;
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
.next{
    right: -15px;
}
.previous {
    left: -15px;
}
</style>