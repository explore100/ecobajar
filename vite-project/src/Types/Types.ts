
export interface IpreHeader {
    title: string
}

// this is the code of deals of tsx
export interface Product {
    title: string
}

// this is the code of FeatProduct.tsx
export interface FeatProduct {
    title: string
}



// this is the code of Item.tsx
import { STATICS_IMAGE } from "../Utility/Staticimage";

// Define type for each card
interface Card {
  id: number;
  img: string;
  title: string;
}

// Define type for the overall data object
interface Data {
  CardData: Card[];
}

// Your data object with the defined types
 const data: Data = {
  CardData: [
    { id: 1, img: STATICS_IMAGE.image1, title: 'Fresh Fruits' },
    { id: 2, img: STATICS_IMAGE.image2, title: 'Fresh Vegetables' },
    { id: 3, img: STATICS_IMAGE.image3, title: 'Meat & Fish' },
    { id: 4, img: STATICS_IMAGE.image4, title: 'Snacks' },
    { id: 5, img: STATICS_IMAGE.image5, title: 'Beverages' },
    { id: 6, img: STATICS_IMAGE.image6, title: 'Beauty & Health' },
    { id: 7, img: STATICS_IMAGE.image7, title: 'Bread & Bakery' },
    { id: 8, img: STATICS_IMAGE.image8, title: 'Baking Needs' },
    { id: 9, img: STATICS_IMAGE.image9, title: 'Cooking' },
    { id: 10, img: STATICS_IMAGE.image10, title: 'Diabetic Food' },
    { id: 11, img: STATICS_IMAGE.image11, title: 'Dish Detergents' },
    { id: 12, img: STATICS_IMAGE.image12, title: 'OIl' },
  ]
};
export default data;




// This is the code of Feature.tsx
import { Feature_Image } from "../Utility/Staticimage";
interface Feature {
    id: number;
    img: string;
    title: string;
    description: string;
}
interface  Date {
    FeatureData: Feature[];
}
 export const date: Date = {
    FeatureData: [
        {
            id: 30,
            img: Feature_Image.truck,
            title: 'Fast Delivery',
            description: 'Free shipping on all your order'
        },
        {
            id: 31,
            img: Feature_Image.headphone,
            title: 'Customer Support 24/7',
            description: 'Instant access to Support' 
        },
        {
            id: 32,
            img: Feature_Image.shoppingbag,
            title: '100% Secure Payment',
            description: 'We ensure your money is save'
        },
        {
            id: 33,
            img: Feature_Image.box,
            title: 'Money-Back Guarantee',
            description: '30 Days Money-Back Guarantee'
        },
    ]
};

//this is the code of Dels.tsx
import { Vegetable_Image } from "../Utility/Staticimage";


interface Vege {
    id: number;
    img: string;
    title: string;
    price: string | number;
   
    
}

interface HotProduct {
    ProductData: Vege[];
}


 export const hotproduct: HotProduct = {
    ProductData:[
        {
            id: 18,
            img: Vegetable_Image.pear,
            title: 'Green Apple',
            price: "$14.99", 
        },
        {
            id: 19,
            img: Vegetable_Image.orange,
            title: "Fresh Indian Malta",
            price: "$20.00",
            
        },
        {
            id: 20,
            img: Vegetable_Image.chines,
            title: 'Chines Cabbage',
            price: "$12.00",
           

        },
        {
            id: 21,
            img: Vegetable_Image.curlys,
            title: 'Green Lettuce',
            price:"$9.00",

        },
        {
            id: 22,
            img: Vegetable_Image.brinjal,
            title: 'Eggplant',
            price: "$34.00",

        },
        {
            id: 23,
            img: Vegetable_Image.potato,
            title: 'Big Potatoes',
            price: "$20.00",

        },
        {
            id: 24,
            img: Vegetable_Image.maze,
            title: 'corn',
            price: "$20.00",

        },
        {
            id: 25,
            img: Vegetable_Image.cauli,
            title: 'Fresh CauliFlower',
            price: "$12.00",

        },
        {
            id: 26,
            img: Vegetable_Image.capcicon,
            title: 'Green Capcicun',
            price: "$9.00",

        },
        {
            id: 27,
            img: Vegetable_Image.chilli,
            title: 'Green Chili',
            price: "$34.00",

        }
    ]
};

//This is the code of BannerS.tsx

import {Fruit_Image} from "../Utility/Staticimage";

interface Fruit {
    id: number;
    img: string;
    subtitle: string | number;
    title: string;
    price: string | number;
}

interface BannerProduct {
    BannerProductData: Fruit[];
}
export const bannerproduct: BannerProduct = {
    BannerProductData:[
        {
            id: 40,
            img: Fruit_Image.mix,
            subtitle: "best deal",
            title: "Sale of the month",
            price: ""
        },
        {
            id: 41,
            img: Fruit_Image.meat,
            subtitle: "85% fat free",
            title: "LOw-Fat Meat",
            price: " $79.99"
        },
        {
            id: 42,
            img: Fruit_Image.yellow,
            subtitle: "summer sale",
            title: "100% Fresh Fruit",
            price: "64% OFF"
        },
    ]
};



