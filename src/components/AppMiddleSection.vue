<script>

import { store } from '../store';

export default {
    name: 'AppMiddleSection',
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

    <section class="py-5 w-100">

        <div class="bg-image w-100 h-100 d-flex justify-content-center align-items-center p-5">
            <div class="card-info me-4 position-relative"
            v-for="element in store.infoCard">
                <img :src="getImgPath(`${element.img_path}`)" :alt="element.title">
                <div class="position-absolute">
                    <h3>{{ element.title }}</h3>
                    <p>{{ element.caption }}</p>
                    <button class="my-btn-transparent text-uppercase">{{ element.button }}</button>
                </div>
            </div>            
        </div>

    </section>

</template>

<style lang="scss" scoped>
section{
        height: 75vh;
        >div.bg-image{
            background-image: url('../asset/images/bkgd_confetti-compressor.jpg');
            background-size: cover;
            background-position: center;
            .card-info{
                width: 35%;
                height: 100%;
                >img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: top;
                }
                >div{
                    top: 50%;
                    left: 5%;
                    transform: translateY(-50%);
                    color: white;
                    >h3 {
                        font-weight: 700;
                    }
                    >p {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }
</style>