<script>

import { store } from '../store';

export default {
    name: 'AppCollection',
    data() {
        return {
            store
        }
    },
    methods:{
        getImgPath(myPath){
            return new URL(myPath, import.meta.url).href
        }
    }
}

</script>

<template>

    <section class="pt-5 pb-5">

        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="card-collection position-relative"
                v-for="element in store.collection">
                <img :src="getImgPath(`${element.img_path}`)" :alt="element.title">
                <div class="position-absolute text-center">
                    <h3>{{ element.title }}</h3>
                    <p class="text-uppercase">{{ element.caption }}</p>
                    <button class="my-btn-transparent text-uppercase">{{ element.button }}</button>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
section{
        height: 70vh;
    }
    .card-collection{
        height: 100%;
        width: calc(100% / 3);
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
        }
        >div{
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            width: 100%;
            >h3{
                font-weight: 700;
            }
            >p{
                font-size: 0.75rem;
                letter-spacing: $letter-spacing;
            }
        }
    }
</style>