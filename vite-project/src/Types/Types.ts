
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

// this is the code of Latest.tsx
export interface LatestNews {
    title: string
}

// this is the code of hot deals


export interface ShoppingCart {
    title: string
}

export interface RealatedProduct {
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
interface Date {
    FeatureData: Feature[];
}
export const date: Date = {
    FeatureData: [
        {
            id: 34,
            img: Feature_Image.truck,
            title: 'Fast Delivery',
            description: 'Free shipping on all your order'
        },
        {
            id: 35,
            img: Feature_Image.headphone,
            title: 'Customer Support 24/7',
            description: 'Instant access to Support'
        },
        {
            id: 36,
            img: Feature_Image.shoppingbag,
            title: '100% Secure Payment',
            description: 'We ensure your money is save'
        },
        {
            id: 37,
            img: Feature_Image.box,
            title: 'Money-Back Guarantee',
            description: '30 Days Money-Back Guarantee'
        },
        {
            id: 38,
            img: Feature_Image.pricetag,
            title: '64% Discount',
            description: 'Save Your 64% money with us',
        },
        {
            id: 39,
            img: Feature_Image.grelef,
            title: '100% Organic',
            description: '100% Organic Vegetables',}
    ]
};

//this is the code of Dels.tsx
import { Vegetable_Image } from "../Utility/Staticimage";


export interface Vege {
    id: number;
    img: string;
    images: string[];
    title: string;
    price: number  ;
    quantity: number;
}

interface HotProduct {
    ProductData: Vege[];
}


export const hotproduct: HotProduct = {
    ProductData: [
        {
            id: 18,
            img: Vegetable_Image.pear,
            title: 'Green Apple',
            price: 14.99,
            images: [
                Vegetable_Image.pear,
                Vegetable_Image.pear,
                Vegetable_Image.pear,
                Vegetable_Image.pear,
            ],
            quantity: 1,
        },
        {
            id: 19,
            img: Vegetable_Image.orange,
            title: "Fresh Indian Malta",
            price: 14.99,
            images: [
                Vegetable_Image.orange,
                Vegetable_Image.orange,
                Vegetable_Image.orange,
                Vegetable_Image.orange,
            ],
            quantity: 1,

        },
        {
            id: 20,
            img: Vegetable_Image.chines,
            title: 'Chines Cabbage',
            price: 12.00,
            images:[
                Vegetable_Image.chines,
                Vegetable_Image.right,
                Vegetable_Image.left,
                Vegetable_Image.down,
            ],
            quantity: 1,


        },
        {
            id: 21,
            img: Vegetable_Image.curlys,
            title: 'Green Lettuce',
            price: 9.00,
            quantity: 1,
            images:[
                Vegetable_Image.curlys,
                Vegetable_Image.curlys,
                Vegetable_Image.curlys,
                Vegetable_Image.curlys,
            ]

        },
        {
            id: 22,
            img: Vegetable_Image.brinjal,
            title: 'Eggplant',
            price: 34.00,
            quantity: 1,
            images:[
                Vegetable_Image.brinjal,
                Vegetable_Image.brinjal,
                Vegetable_Image.brinjal,
                Vegetable_Image.brinjal,
            ]

        },
        {
            id: 23,
            img: Vegetable_Image.potato,
            title: 'Big Potatoes',
            price: 20.00,
            quantity: 1,
            images:[
                Vegetable_Image.potato,
                Vegetable_Image.potato,
                Vegetable_Image.potato,
                Vegetable_Image.potato,
            ]

        },
        {
            id: 24,
            img: Vegetable_Image.maze,
            title: 'corn',
            price: 20.00,
            quantity: 1,
            images:[
                Vegetable_Image.maze,
                Vegetable_Image.maze,
                Vegetable_Image.maze,
                Vegetable_Image.maze,
            ]

        },
        {
            id: 25,
            img: Vegetable_Image.cauli,
            title: 'Fresh CauliFlower',
            price: 12.00,
            quantity: 1,
            images:[
                Vegetable_Image.cauli,
                Vegetable_Image.cauli,
                Vegetable_Image.cauli,
                Vegetable_Image.cauli,
            ]

        },
        {
            id: 26,
            img: Vegetable_Image.capcicon,
            title: 'Green Capcicun',
            price: 9.00,
            quantity: 1,
            images:[
                Vegetable_Image.capcicon,
                Vegetable_Image.capcicon,
                Vegetable_Image.capcicon,
                Vegetable_Image.capcicon,
            ]

        },
        {
            id: 27,
            img: Vegetable_Image.chilli,
            title: 'Green Chili',
            price: 34.00,
            quantity: 1,
            images:[
                Vegetable_Image.chilli,
                Vegetable_Image.chilli,
                Vegetable_Image.chilli,
                Vegetable_Image.chilli,
            ]
        },
        {
            id: 28,
            img: Vegetable_Image.redcap,
            title: 'Red Chili',
            price: 12.00,
            quantity: 1,
            images:[
                Vegetable_Image.redcap,
                Vegetable_Image.redcap,
                Vegetable_Image.redcap,
                Vegetable_Image.redcap,
            ]
        },
        {
            id: 29,
            img: Vegetable_Image.tomato,
            title: 'Red Tomatos',
            price: 9.00,
            quantity: 1,
            images:[
                Vegetable_Image.tomato,
                Vegetable_Image.tomato,
                Vegetable_Image.tomato,
                Vegetable_Image.tomato,
            ]
        },
        {
            id: 30,
            img: Vegetable_Image.slicmango,
            title: "Surjapur Mango",
            price: 34.00,
            quantity: 1,
            images:[
                Vegetable_Image.slicmango,
                Vegetable_Image.slicmango,
                Vegetable_Image.slicmango,
                Vegetable_Image.slicmango,
            ]
        },
        {
            id: 31,
            img:Vegetable_Image.redchilly,
            title: "Red Chilli",
            price: 14.99,
            quantity: 1,
            images:[
                Vegetable_Image.redchilly,
                Vegetable_Image.redchilly,
                Vegetable_Image.redchilly,
                Vegetable_Image.redchilly,
            ]
        },
        {
            id: 32,
            img: Vegetable_Image.cucumber,
            title:" Green Cucumber",
            price: 14.99,
            quantity: 1,
            images:[
                Vegetable_Image.cucumber,
                Vegetable_Image.cucumber,
                Vegetable_Image.cucumber,
                Vegetable_Image.cucumber,
            ]
        },
        {
            id: 33,
            img: Vegetable_Image.ladyfinger,
            title:"Ladies Finger",
            price: 14.99,
            quantity: 1,
            images:[
                Vegetable_Image.ladyfinger,
                Vegetable_Image.ladyfinger,
                Vegetable_Image.ladyfinger,
                Vegetable_Image.ladyfinger,
            ]
        }
    ]
};

//This is the code of BannerS.tsx

import { Fruit_Image } from "../Utility/Staticimage";

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
    BannerProductData: [
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
            title: "Low-Fat Meat",
            price: " $79.99"
        },
        {
            id: 42,
            img: Fruit_Image.yellow,
            subtitle: "summer sale",
            title: "100% Fresh Fruit",
            price: " 64% OFF"
        },
    ]
};

//this is the code of Latest.tsx
import { Latest_Image } from "../Utility/Staticimage";

interface News {
    id: number;
    img: string;
    titleA: string;
    titleB: string;
    titleC: number | string;
    subtitle: string;
}
interface LatestNewz {
    LatestNewsData: News[];

}
export const latestnewz: LatestNewz = {
    LatestNewsData: [
        {
            id: 50,
            img: Latest_Image.ora,
            titleA: 'Food',
            titleB: 'By Admin',
            titleC: '65 Comments',
            subtitle: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
        },
        {
            id: 51,
            img: Latest_Image.egg,
            titleA: 'Food',
            titleB: 'By Admin',
            titleC: '65 Comments',
            subtitle: "Eget lobortis lorem lacinia. Vivamus pharetra semper,"
        },
        {
            id: 52,
            img: Latest_Image.salad,
            titleA: 'Food',
            titleB: '  Admin',
            titleC: '65 Comments',
            subtitle: "Maecenas blandit risus elementum mauris malesuada."
        }
    ]
};

//This is the code of Testimonial.tsx
import { Person_Image } from "../Utility/Staticimage";
interface Testimonia {
    id: number;
    img: string;
    subtitle: string;
    name: string;
    person: string;

}

interface Testi {
    TestimonialData: Testimonia[];
}

export const testimonial: Testi = {
    TestimonialData: [
        {
            id: 60,
            img: Person_Image.personA,
            subtitle: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            name: "Robert Fox",
            person: "Customer",
        },
        {
            id: 61,
            img: Person_Image.personB,
            subtitle: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            name: "Dianne Russell",
            person: "Customer",
        },
        {
            id: 62,
            img: Person_Image.personc,
            subtitle: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            name: "Eleannor pena",
            person: "Customer",
        },
    ]
};

// this is the code of complogo.tsx
import { Comp_logo } from "../Utility/Staticimage";

interface Logo {
    CompanyLogoData: { img: string }[];
}

export const companylogo : Logo ={
    CompanyLogoData: [
        {
            img: Comp_logo.logoA,
        },
        {
            img: Comp_logo.logoB,
        },
        {
            img: Comp_logo.logoC,
        },
        {
            img: Comp_logo.logoD,
        },
        {
            img: Comp_logo.logoE,
        },
        {
            img: Comp_logo.logoF,
        },
    ]
}

//This is the code of Insta.tsx

import { Instagram_Image } from "../Utility/Staticimage";
interface InstagramPic {
    InstagramPicData: { img: string }[];
}
export const insta: InstagramPic ={
    InstagramPicData: [
        { img: Instagram_Image.insta1},
        { img: Instagram_Image.insta2},
        { img: Instagram_Image.insta3},
        { img: Instagram_Image.insta4},
        { img: Instagram_Image.insta5},
        { img: Instagram_Image.insta6},
    ]   
}

//This is the code of Footer.tsx
import { Footer_LOGO } from "../Utility/Staticimage";

interface Footer {
    FooterData: {img: string}[];
}

export const footer: Footer ={
    FooterData: [
        {img: Footer_LOGO.footerA},
        {img: Footer_LOGO.footerB},
        {img: Footer_LOGO.footerC},
        {img: Footer_LOGO.footerD},
        {img: Footer_LOGO.footerE},
        
    ]
}


// This is the code of Cart.tsx

// cartData.ts
export interface CartItem {
    id: number;
    title: string;
    img: string;
    price: number
    quantity: number;
  }
  
  export const initialCart: CartItem[] = [
    {
      id: 1,
      title: "Green Capsicum",
      img: Vegetable_Image.capcicon,
      price: 14.0,
      quantity: 5,
    },
    {
      id: 2,
      title: "Red Capsicum",
      img: Vegetable_Image.redcap,
      price: 14.0,
      quantity: 1,
    },
  ];
  


