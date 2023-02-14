<script>

    import { store } from '../store';

    export default {
        name: 'AppFeaturedProducts',
        data() {
            return {
                store,
            }
        },
        methods:{
            getImgPath(myPath){
                return new URL(myPath, import.meta.url).href
            },
            activeCollection(i){
                return this.activeSection = i;
            }
        }
    }
</script>

<template>
    <section>
        <div class="text-center">
            <h3 class="font-weight-600">Best Seller</h3>
            <h6 class="mb-5">Must have products from our top sellers</h6>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h6{
    font-size: 0.75rem;
    color: $my-dark-gray;
}
.choice{
        max-width: fit-content;
        margin: 0 auto;
        ul{
            li{
                font-size: 0.75rem;
                font-weight: 500;
            }
        }
    }
    .not-active{
        background-color: $my-second-white;
    }
    li.list-group-item:hover{
        cursor: pointer;
    }
</style>