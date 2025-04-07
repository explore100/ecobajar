
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
export interface HotDeals {
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
    ProductData: [
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
            price: "$9.00",

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
        },
        {
            id: 28,
            img: Vegetable_Image.redcap,
            title: 'Red Chili',
            price: "$12.00",
        },
        {
            id: 29,
            img: Vegetable_Image.tomato,
            title: 'Red Tomatos',
            price: "$9.00",
        },
        {
            id: 30,
            img: Vegetable_Image.slicmango,
            title: "Surjapur Mango",
            price: "$34.00",
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


