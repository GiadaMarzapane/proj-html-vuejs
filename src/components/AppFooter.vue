<script>
import { store } from '../store';

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    },
    methods: {
        getImgPath(myPath) {
            return new URL(myPath, import.meta.url).href
        }
    }
}
</script>

<template>
    <section class="w-100 subscribe py-5">
        <div class="w-75 mx-auto py-4 d-flex justify-content-center align-items-baseline">
            <div class="envelope me-3">
                <font-awesome-icon icon="fa-regular fa-envelope" />
            </div>
            <div class="me-4">
                <h6 class="font-weight-700 text-light">Subscribe now and have special offer</h6>
            </div>
            <div class="me-3 ms-5 w-25">
                <input class="w-100" type="text" name="" placeholder="Insert your email">
            </div>
            <div>
                <button class="my-btn text-uppercase">send</button>
            </div>
        </div>
    </section>
    <section class="product-footer w-100 py-4">
        <div class="w-75 mx-auto d-flex text-light">
            <div class="w-25 d-flex flex-column text-light px-4">
                <div class="mb-3">
                    <img class="img-fluid" src="../asset/images/classic_shop_logo_footer.png" alt="">
                </div>
                <div>
                    <p class="size-7">
                        12345 North Main Street,
                        <br>
                        New York, NY 55555
                        <br>
                        Phone: 23456789000
                        <br>
                        Email: info@company.company
                        <br>
                        Web: Theme-Fusion.com                        
                    </p>
                </div>
                <div class="">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="me-3" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="me-3" />
                    <font-awesome-icon icon="fa-brands fa-youtube"/>
                </div>
            </div>
            <div class="w-25 d-flex flex-column px-4">
                <div>
                    <h6 class="size-7 text-uppercase">top rated products</h6>
                </div>
                <div>
                    <div class="d-flex justify-content-between align-items-center my-border-bottom py-2" v-for="element in store.littleImgs.slice(0, 3)">
                        <div>
                            <p class="size-7 mb-0">{{ element.name_product }}</p>
                            <div class="mb-1">
                                <span v-for="index in element.rate">
                                    <font-awesome-icon icon="fa-solid fa-star" />
                                </span>
                            </div>
                            <p class="size-7 mb-0">
                                <span class="text-decoration-line-through me-1">
                                    <strong>{{ element.original_price }}</strong>
                                </span>
                                <span class="text-decoration-underline">
                                    <strong>{{ element.current_price }}</strong>
                                </span>
                            </p>
                        </div>
                        <div>
                            <img class="little-img" :src="getImgPath(`${element.img_path}`)" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-25 d-flex flex-column px-4">
                <h6 class="size-7 text-uppercase">recent posts</h6>
                <div>
                    <p class="lorem my-border-bottom size-7 mb-0 py-2" v-for="element in 6">
                        <font-awesome-icon class="me-1" icon="fa-solid fa-chevron-right" />
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div class="w-25 d-flex flex-column px-4">
                <div>
                    <h6 class="size-7 text-uppercase d-block">tags</h6>
                </div>
                <div class="d-flex flex-wrap">
                    <button v-for="element,index in store.footerTags" class="size-7 tag-footer mb-1 me-1">
                        {{ element }}
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="w-100 payment d-flex justify-content-center align-items-center py-4">
        <div class="text-center">
            <div>
                <p class="text-light size-7">
                    <font-awesome-icon icon="fa-regular fa-copyright" />
                    Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powerd by Wordpress
                </p>
            </div>
            <div>
                <img class="img-fluid" src="../asset/images/payment_cards_footer.png" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.subscribe{
        background-color: rgb(40, 40, 40);
        .envelope{
            height: 50px;
            width: 50px;
            line-height: 50px;
            background-color: #2B2E32;
            border-radius: 50%;
            text-align: center;
            .fa-envelope{
                height: 1.5rem;
                color: $my-light-gray;
            }
        }
        input{
            padding: 5px 10px;
            border-radius: 15px;
            outline: none;
            border: none;
            font-size: 12px;
            &::placeholder{
                font-size: 0.6rem;
            }
        }
        .my-btn{
            padding: 5px 30px !important;
        }
    }
    .product-footer{
        background-color: #2B2E32;

        .fa-chevron-right, .fa-star{
            height: 0.5rem;
        }
        .fa-star{
            color: $my-blue;
        }
        .lorem{
            cursor: pointer;
        }
        .tag-footer{
            border: 1px solid $my-dark-gray;
            background-color: transparent;
            width: fit-content;
            color: white;
        }
        .little-img{
            height: 60px;
        }
    }
    .payment{
        height: 15vh;
        background-color: rgb(20, 20, 20);
    }
</style>