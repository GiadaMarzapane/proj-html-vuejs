import { reactive } from "vue";
export const store = reactive({
    mainNav: ['home', 'shop', 'products', 'categories', 'news', 'elements'],
    active: 0,
    collection: [
        {
            title: 'Winter Collection',
            caption: 'stylish and warm',
            button: 'view more',
            img_path: '../asset/images/winter_collection_bg.jpg'
        }, {
            title: 'Spring Collection',
            caption: 'bright and colorful',
            button: 'view more',
            img_path: '../asset/images/spring_collection_bg.jpg'
        }, {
            title: 'Autumn Collection',
            caption: 'rich and comfortable',
            button: 'view more',
            img_path: '../asset/images/autumn_collection_bg.jpg'
        }
    ],
    infoCard:[
        {
            title: '70% Off',
            caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat?',
            button: 'view more',
            img_path: '../asset/images/promo_box_1_bg.jpg'
        }, {
            title: 'Free Shipping',
            caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat?',
            button: 'view more',
            img_path: '../asset/images/promo_box_2_bg.jpg'
        }
    ],
    featuredProducts: [
        {
            section: 'men',
            id: 1,
            card_info: [
                {
                    title: 'Black Leather Jacket',
                    info: 'Men, Jackets, Jeans',
                    original_price: '$235',
                    current_price: '$200',
                    img_path: '../asset/images/black_elegant_leather_jacket-200x260.jpg'
                }, {
                    title: 'Black Leather Suit',
                    info: 'Men, Jackets',
                    current_price: '$176',
                    img_path: '../asset/images/black_leather_suit-200x260.jpg'
                }, {
                    title: 'Blue Jacket & Stripe Tee',
                    info: 'Men, Jackets, Suits',
                    current_price: '$580',
                    img_path: '../asset/images/blue_jacket_and_white_stripe_tee-200x260.jpg'
                }, {
                    title: 'Modern Black Leather Suit',
                    info: 'Men, Jackets',
                    current_price: '$96',
                    img_path: '../asset/images/blue_leather_jacket-200x260.jpg'
                }
            ]
        },
        {
            section: 'women',
            id: 2,
            card_info: [
                {
                    title: 'Black Leather Jacket',
                    info: 'Women, Jackets, Jeans',
                    original_price: '$235',
                    current_price: '$200',
                    img_path: '../asset/images/black_leather_jacket-200x260.jpg'
                }, {
                    title: 'Hipster Balck Top',
                    info: 'Women, Top',
                    current_price: '$176',
                    img_path: '../asset/images/hipster_black_top-200x260.jpg'
                }, {
                    title: 'Modern Love Print Tee',
                    info: 'Women, Tee',
                    current_price: '$150',
                    img_path: '../asset/images/modern_love_tee-200x260.jpg'
                }, {
                    title: 'Printed Spring Dress',
                    info: 'Women, Dress',
                    current_price: '$259',
                    img_path: '../asset/images/spring_printed_dress-200x260.jpg'
                }
            ]
        }, {
            section: 'accesories',
            id: 3,
            card_info: [
                {
                    title: 'Brown Dress Shoes',
                    info: 'Men, Shoes',
                    original_price: '$235',
                    current_price: '$200',
                    img_path: '../asset/images/brown_dress_shoes-200x260.jpg'
                }, {
                    title: 'Casual Leather Belts',
                    info: 'Men, Belt',
                    current_price: '$176',
                    img_path: '../asset/images/casual_leather_belts-200x260.jpg'
                }, {
                    title: 'Modern Leather Boots',
                    info: 'Men, Shoes, Boots',
                    current_price: '$150',
                    img_path: '../asset/images/modern_leather_boots-200x260.jpg'
                }
            ]
        }
    ],
    bestSeller:[
        {
            img_path: '../asset/images/spring_printed_dress-231x300.jpg',
            visible: true
        }, {
            img_path: '../asset/images/black_elegant_leather_jacket-231x300.jpg',
            visible: true
        }, {
            img_path: '../asset/images/black_leather_jacket-231x300.jpg',
            visible: true
        }, {
            img_path: '../asset/images/blue_leather_jacket-231x300.jpg',
            visible: true
        }, {
            img_path: '../asset/images/hipster_black_top-231x300.jpg',
            visible: false
        }, {
            img_path: '../asset/images/leather_gloves-231x300.jpg',
            visible: false
        }, {
            img_path: '../asset/images/modern_leather_boots-231x300.jpg',
            visible: false
        }
    ],
    opinions: [
        {
            img_path: '../asset/images/man_testimonial.png',
            name: 'Dario Pineda',
            comment: 'Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla.In hac habitasse platea dictumst.Mauris consectetur est et nibh sadip hendrerit bendum.',
        }, {
            img_path: '../asset/images/woman_testimonial.png',
            name: 'Maria Salvador',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nisl sit amet tortor tempus, nec ultricies lacus commodo. Praesent non tellus volutpat mi congue.',
        }
    ]
})