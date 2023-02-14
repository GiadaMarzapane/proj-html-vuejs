<script>

    import { store } from '../store';

    export default {
        name: 'AppOpinions',
        data() {
            return {
                store,
                currentOpinion: 0
            }
        },
        methods:{
            getImgPath(myPath){
                return new URL(myPath, import.meta.url).href
            },
            changeOpinion(){
                if (this.currentOpinion != 0) {
                    return this.currentOpinion = 0
                }
                else{
                    return this.currentOpinion = 1
                }
            }
        }
    }
</script>

<template>
    <section>
        <div class="opinion-div d-flex justify-content-center align-items-center text-white text-center">
            <div class="content">
                    <template v-for="element, index in store.opinions">
                        <div v-if="index == currentOpinion">
                            <img :src="getImgPath(`${store.opinions[currentOpinion].img_path}`)" alt="">
                            <p class="size-7 pt-3 pb-2">
                                <em>{{ store.opinions[currentOpinion].comment }}</em>
                            </p>
                            <p class="size-7">
                                <strong>{{store.opinions[currentOpinion].name}}, </strong>
                                <span>Theme Fusion</span>
                            </p>
                        </div>
                    </template>
                </div>
                <div class="commands">
                    <font-awesome-icon class="me-2" @click="changeOpinion" icon="fa-solid fa-circle" />
                    <font-awesome-icon @click="changeOpinion" icon="fa-regular fa-circle" />
                </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.opinion-div{
    height: 65vh;
    background-image: url('../asset/images/testimonials_home_1_bg.jpg');
    background-size: cover;
    position: relative;
    >div.content{
        max-width: 50%;
        height: 80%;
        margin: 0 auto;
        letter-spacing: $letter-spacing;
        p {
            line-height: 1.5rem;
        }
    }
    div.commands{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }
}
</style>