<script>

    import { store } from '../store';

    export default {
        name: 'AppBestSeller',
        data() {
            return {
                store,
                activeSlides: 0
            }
        },
        methods:{
            getImgPath(myPath){
                return new URL(myPath, import.meta.url).href
            },
            changeSlides(){
                if (this.activeSlides == 0) {
                    return this.activeSlides = 1;
                }
                else{
                    return this.activeSlides = 0;
            }
            }
    }
}
</script>

<template>
    <section class="py-5 w-100">
        <div class="text-center w-75 mx-auto position-relative">
            <div class="line">
                <div class="line-one"></div>
                <div class="line-two"></div>
                <div class="line-three"></div>
            </div>
            <div>
                <h3 class="font-weight-600">Best Seller</h3>
                <h6 class="mb-5">Must have products from our top sellers</h6>
            </div>
            <div class="my-container d-flex">
                <div class="next" @click="changeSlides">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </div>
                <div class="previous" @click="changeSlides">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </div>
                <div v-for="element in store.bestSeller[activeSlides].group.slice(0,4)">
                        <img :src="getImgPath(`${element.img_path}`)" alt="">
                </div>
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
    scroll-behavior: smooth;
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
    right: 0;
}
.previous {
    left: 0;
}
</style>