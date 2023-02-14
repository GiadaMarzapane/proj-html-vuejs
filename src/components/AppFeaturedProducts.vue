<script>

    import { store } from '../store';

    export default {
        name: 'AppFeaturedProducts',
        data() {
            return {
                store,
                activeSection: 0
            }
        },
        methods:{
            getImgPath(myPath){
                return new URL(myPath, import.meta.url).href
            },
            activeCollection(i){
                console.log('click su', i)
                return this.activeSection = i;
            }
        }
    }
</script>

<template>
    <section>
        <div class="text-center">
            <h2>Featured Products</h2>
            <h6>Must have products from our top sellers</h6>
    
            <div class="choice">
                <ul class="list-group list-group-horizontal">
                    <li v-for="element, index in store.featuredProducts"
                    class="list-group-item text-capitalize"
                    @click="activeCollection(index)">
                    {{ element.section }}
                    </li>
                </ul>
            </div>

            <div :id="store.featuredProducts[activeSection].section"
            class="d-flex justify-content-center">
                <div v-for="element in store.featuredProducts[activeSection].card_info">
                    <img :src="getImgPath(`${element.img_path}`)" alt="">
                    <p>{{element.title}}</p>
                    <span>{{element.info}}</span>
                    <p>$200</p>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
    .choice{
        max-width: fit-content;
        margin: 0 auto;
    }
    .not-active{
        background-color: $my-light-gray;
    }
</style>