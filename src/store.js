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
    ]
})