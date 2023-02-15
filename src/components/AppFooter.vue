<script>
    
    export default{
        name: 'AppFooter'
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
    <section class="w-100 payment d-flex justify-content-center align-items-center py-4">
        <div class="text-center">
            <div>
                <p class="text-light size-7">
                    <font-awesome-icon icon="fa-regular fa-copyright" />
                    Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powerd by Wordpress
                </p>
            </div>
            <div>
                <img src="../asset/images/payment_cards_footer.png" alt="">
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
        background-color: rgb(30, 30, 30);
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
    }
    .my-btn{
        padding: 5px 30px !important;
    }
}
    .payment{
        height: 15vh;
        background-color: rgb(20, 20, 20);
    }
</style>