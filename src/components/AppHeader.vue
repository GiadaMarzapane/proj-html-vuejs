<script>
    
    export default{
        name: 'AppHeader'
    }

</script>

<template>
    <header>
        <section class="border-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="flex-grow-1 pt-2 pb-2">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="me-3 text-secondary" />
                    <font-awesome-icon icon="fa-brands fa-youtube" class="text-secondary" />
                </div>
                <div>
                    <a class="text-decoration-none border-end p-2 text-secondary" href="#">Shopping Cart</a>
                    <a class="text-decoration-none border-end p-2 text-secondary" href="#">My Account
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </div>
                <div>
                    <a class="text-decoration-none ps-5 pt-2 pb-2 text-secondary" href="#">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                        CART
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </div>
            </div>
        </section>
        <section>
            <div class="container d-flex justify-content-between align-items-center">
                <div>
                    <img src="" alt="logo">
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                Home
                                <font-awesome-icon icon="fa-solid fa-chevron-down" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>

    a{
        font-size: 0.8rem;
    }
    .fa-chevron-down{
        height: 0.5rem;
        vertical-align: middle;
    }
</style>