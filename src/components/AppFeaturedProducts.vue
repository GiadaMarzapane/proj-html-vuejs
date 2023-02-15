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
                return this.activeSection = i;
            }
        }
    }
</script>

<template>
    <section class="w-100 py-5 position-relative">
        <div class="line">
            <div class="line-one"></div>
            <div class="line-two"></div>
            <div class="line-three"></div>
        </div>
        <div class="text-center w-75 mx-auto">
            <div>
                <h3 class="font-weight-600">Featured Products</h3>
                <h6 class="mb-5">Must have products from our top sellers</h6>
            </div>
            <div class="choice mb-5">
                <ul class="list-group list-group-horizontal">
                    <li v-for="element, index in store.featuredProducts"
                    class="list-group-item text-capitalize"
                    :class="(activeSection != index) ? 'not-active' : ''"
                    @click="activeCollection(index)">
                    {{ element.section }}
                    </li>
                </ul>
            </div>

            <div :id="store.featuredProducts[activeSection].section"
            class="d-flex justify-content-center my-product">
                <div class=" card-img p-2" v-for="element in store.featuredProducts[activeSection].card_info">
                    <div class="position-relative">
                        <div class="overlay position-absolute justify-content-center align-items-center text-light">
                            <div>
                                <h5 class="size-75">
                                    <strong>
                                        {{element.title}}
                                    </strong>
                                </h5>
                                <p class="size-75">{{element.info}}</p>
                                <p class="size-75">
                                    {{ element.current_price }}
                                </p>
                            </div>
                            <div class="cart position-absolute">
                                <span class="size-7">
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                    Add to Cart</span>
                            </div>
                            <div class="details position-absolute">
                                <span class="size-7">
                                    <font-awesome-icon icon="fa-solid fa-list-ul" />
                                    Details</span>
                            </div>
                        </div>
                        <img :src="getImgPath(`${element.img_path}`)" alt="">
                    </div>
                    <div class="text-start">
                        <p class="mb-0 mt-3 size-75 font-weight-600">{{element.title}}</p>
                        <span class="size-7">{{element.info}}</span>
                        <div>
                            <span class="text-decoration-line-through text-primary size-7">{{ element.original_price }} </span>
                            <span class="text-primary size-75">{{ element.current_price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.line{
    top: 10% !important;
}
h6{
    font-size: 0.75rem;
    color: $my-dark-gray;
}

.overlay{
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(66, 126, 209, 0.8) 25%, rgba(240, 150, 186, 0.8) 75%);
    top: 0;
    left: 0;
    display: none;
    .fa-fa-cart-shopping, .fa-list-ul{
        height: 0.5rem;
    }
    .cart, .details{
        bottom: 10px
    }
    .cart{
        left: 15px;
    }
    .details{
        right: 15px;
    }
    .cart:hover, .details:hover{
        text-decoration: underline;
        cursor: pointer;
    }
}
.card-img{
    max-width: fit-content;
    cursor: pointer;
    &:hover .overlay {
        display: flex;
    }
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