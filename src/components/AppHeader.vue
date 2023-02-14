<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <header class="pb-5">
        <section class="border-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="flex-grow-1 pt-2 pb-2">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-youtube" class="text-secondary" />
                </div>
                <div>
                    <a class="text-decoration-none border-end pt-2 pb-2 pe-3 ps-3 text-secondary" href="#">Shopping Cart</a>
                    <a class="text-decoration-none border-end pt-2 pb-2 pe-3 ps-3 text-secondary" href="#">My Account
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </div>
                <div>
                    <a class="text-decoration-none text-secondary ps-5 pe-5 pt-4 pb-4" href="#">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                        <span class="text-uppercase pe-2 ps-2">cart</span>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </div>
            </div>
        </section>
        <section>
            <div class="container d-flex justify-content-between align-items-center">
                <div>
                    <img src="../asset/images/classic_shop_logo1x.png" alt="logo">
                </div>
                <div>
                    <ul class="d-flex">
                        <li v-for="(element, index) in store.mainNav" class="me-5" :class="(index == 0) ? 'active' : '' ">
                            <a href="#" class="text-capitalize text-decoration-none" :class="(index == 0) ? 'active' : 'text-secondary' ">
                                {{ element }}
                                <font-awesome-icon icon="fa-solid fa-chevron-down" v-if="index != 4" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button class="my-btn text-uppercase">Shop now!</button>
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </section>
        <section class="w-100 jumbotron d-flex justify-content-center align-items-center">
            <div class="my-title text-white text-center">
                <h1 class="text-capitalize">brand new arrivals</h1>
                <p class="text-uppercase">new collection from new york</p>
                <button class="text-uppercase me-2 my-btn-transparent">view all</button>
                <button class="text-uppercase my-btn-transparent">lookbook</button>
            </div>
            <div>
                <div class="header-tag d-flex justify-content-center align-items-center text-center">
                    <div>
                        <img src="../asset/images/image.png" alt="">
                        <span>Demos</span>
                    </div>
                </div>
                <div class="header-tag d-flex justify-content-center align-items-center text-center">
                    <div>
                        <p class="mb-1">
                            <sup>$</sup>
                            39
                        </p>
                        <span>On Sale</span>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
ul {
        li {
            list-style: none;
            line-height: 55px;
        }
    }

    a {
        font-size: 0.75rem;
    }

        li.active{
        border-top: 3px solid $my-blue;
        line-height: 50px;
    }

    .active{
        color: $my-blue;
    }

    .fa-chevron-down {
        height: 0.5rem;
        vertical-align: middle;
    }

    .jumbotron{
        height: 70vh;
        background-image: url('../asset/images/home1_slide_three_bg_2.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        div.my-title{
            > h1 {
                font-size: 55px;
                font-weight: 700;
                letter-spacing: $letter-spacing;
            }
            > p{
                letter-spacing: $letter-spacing;
            }
        }
    }

    section:nth-of-type(3){
        position: relative;

        >div:last-of-type{
            position: absolute;
            top: -10px;
            right: 10px;
        }
    }

    .header-tag{
        height: 50px;
        width: 50px;
        background: white;
        border-radius: 5px;
        padding: 5px;
        font-size: 10px;
        margin-bottom: 5px;
        line-height: 10px;
        &:first-of-type{
            box-shadow: 0px -2px 5px 0px #ababab;
        }
        p{
            color: #89cc9a;
            font-size: 18px;
            font-weight: 600;
        }
        sup{
            letter-spacing: -5px;
        }
        }
</style>