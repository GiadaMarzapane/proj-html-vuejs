<script>
import { store } from '../store';

export default {
    name: 'ProductCard',
    data() {
        return {
            store,
        }
    },
    props: {
        name_product: String,
        rate: Number,
        original_price: String,
        current_price: String,
        img: String,
        admin: String
    },
    methods: {
        getImgPath(myPath) {
            return new URL(myPath, import.meta.url).href
        }
    }
}
</script>

<template>
        <div class="d-flex justify-content-between align-items-center my-border-bottom py-2">
            <div>
                <p class="size-7 mb-0">{{ name_product }}</p>
                <div class="mb-1">
                    <span v-for="index in rate">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                </div>
                <p class="size-7 mb-0">
                    <span class="text-decoration-line-through me-1">
                        <strong>{{ original_price }}</strong>
                    </span>
                    <span class="text-decoration-underline">
                        <strong>{{ current_price }}</strong>
                    </span>
                    <span>
                        {{ admin }}
                    </span>
                </p>
            </div>
            <div>
                <img class="little-img" :src="getImgPath(`${img}`)" alt="">
            </div>
        </div>
</template>

<style lang="scss" scoped>
.little-img {
        height: 60px;
    }
    .fa-star{
        height: 0.5rem;
        color: $my-blue;
    }
</style>