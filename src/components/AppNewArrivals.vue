<script>

    import { store } from '../store';

    export default {
        name: 'AppNewArrivals',
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
            changeSlides() {
                if (this.activeSlides == 0) {
                    return this.activeSlides = 1;
                }
                else {
                    return this.activeSlides = 0;
                }
            }
        }
    }
</script>

<template>
    <section class="w-100 py-5 ">
        <div class="text-center position-relative">
            <div class="line">
                <div class="line-one"></div>
                <div class="line-two"></div>
                <div class="line-three"></div>
            </div>
            <h3 class="font-weight-600">New Arrivals</h3>
            <h6 class="mb-5">Brand new products from top designers</h6>
        </div>
        <div class="my-container d-flex">
            <div class="next" @click="changeSlides">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div>
            <div class="previous" @click="changeSlides">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </div>
            <template v-for="element in store.bestSeller[activeSlides].group">
                <div >
                    <img :src="getImgPath(`${element.img_path}`)" alt="">
                </div>
            </template>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h6{
    font-size: 0.75rem;
    color: $my-dark-gray;
}
.my-container{
    width: 95%;
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