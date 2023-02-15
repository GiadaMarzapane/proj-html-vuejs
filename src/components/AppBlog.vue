<script>

import { store } from '../store';
import ProductCard from './ProductCard.vue'

export default {
    name: 'AppBlog',
    data() {
        return {
            store,
        }
    },
    components: {
        ProductCard
    },
    methods: {
        getImgPath(myPath) {
            return new URL(myPath, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="py-5">
        <section class="w-100 pb-5 border-bottom border-2 position-relative">
            <div class="line">
                <div class="line-one"></div>
                <div class="line-two"></div>
                <div class="line-three"></div>
            </div>
            <div class="text-center">
                <h3 class="font-weight-600">From Our Blog</h3>
                <h6 class="mb-5">The latest Classic Shop news</h6>
            </div>
            <div class="my-container d-flex justify-content-between align-items-center mx-auto position-relative">
                <div class="blog-card" v-for="element in store.blog">
                    <img class="img-fluid mb-2" :src="getImgPath(`${element.img_path}`)" alt="">
                    <div>
                        <p class="size-75 mb-0">
                            <strong>{{element.title}}</strong>
                        </p>
                        <p class="size-7 mb-1">{{element.date}}</p>
                        <p class="size-75">{{element.content}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-4">
            <div class="w-75 mx-auto d-flex">
                <div class="w-25 d-flex flex-column px-4">
                    <div>
                        <h6 class="size-7 text-uppercase">featured</h6>
                    </div>
                    <div>
                        <ProductCard v-for="element in store.littleImgs.slice(3, 6)"
                            :name_product="element.name_product"
                            :rate="element.rate"
                            :original_price="element.original_price"
                            :current_price="element.current_price"
                            :img="element.img_path" />
                    </div>
                </div>
                <div class="w-25 d-flex flex-column px-4">
                    <div>
                        <h6 class="size-7 text-uppercase">on sale</h6>
                    </div>
                    <div>
                        <ProductCard v-for="element in store.littleImgs.slice(4, 7)"
                            :name_product="element.name_product"
                            :rate="element.rate"
                            :original_price="element.original_price"
                            :current_price="element.current_price"
                            :img="element.img_path" />
                    </div>
                </div>
                <div class="w-25 d-flex flex-column px-4">
                    <div>
                        <h6 class="size-7 text-uppercase">top rated</h6>
                    </div>
                    <div>
                        <ProductCard v-for="element in store.littleImgs.slice(0, 3)"
                            :name_product="element.name_product"
                            :rate="element.rate"
                            :original_price="element.original_price"
                            :current_price="element.current_price"
                            :img="element.img_path" />
                    </div>
                </div>
                <div class="w-25 d-flex flex-column px-4">
                    <div>
                        <h6 class="size-7 text-uppercase">latest reviews</h6>
                    </div>
                    <div>
                        <ProductCard v-for="element in store.littleImgs.slice(4, 7)"
                            :name_product="element.name_product"
                            :rate="element.rate"
                            :admin="'By admin'"
                            :img="element.img_path" />
                    </div>
                </div>
            </div>
        </section>
        <section class="brand py-4 w-100">
            <div class="w-75 mx-auto text-center">
                <h6 class="text-uppercase mb-3">
                    brand logos
                </h6>
                <div class="d-flex justify-content-between align-items-center">
                    <img class="img-fluid" v-for="element in store.brandLogo" :src="getImgPath(`${element}`)" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
h6 {
    font-size: 0.75rem;
    color: $my-dark-gray;
}

.my-container {
    width: calc(75% + 30px);
    .blog-card{
        width: calc(100% / 3);
        padding: 0 15px;
    }
}
.brand{
    background-color: $my-second-white;
}
</style>