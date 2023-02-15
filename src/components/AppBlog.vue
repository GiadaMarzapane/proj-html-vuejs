<script>

import { store } from '../store';

export default {
    name: 'AppBlog',
    data() {
        return {
            store,
        }
    },
    methods: {
        getImgPath(myPath) {
            return new URL(myPath, import.meta.url).href
        },
    }
}
</script>

<template>
    <section class="w-100 pt-5">
        <div class="text-center">
            <h3 class="font-weight-600">From Our Blog</h3>
            <h6 class="mb-5">The latest Classic Shop news</h6>
        </div>
        <div class="my-container w-75 d-flex justify-content-between align-items-center mx-auto position-relative">
            <div class="blog-card px-3" v-for="element in store.blog">
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
</template>

<style lang="scss" scoped>
h6 {
    font-size: 0.75rem;
    color: $my-dark-gray;
}

.my-container {
    .blog-card{
        width: calc(100% / 3);
    }
}
</style>