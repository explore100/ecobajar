import { ReactNode } from "react";
import { IpreHeader, Product, FeatProduct, LatestNews, HotDeals, ShoppingCart, RealatedProduct,  } from "../Types/Types";

export const Related : RealatedProduct = {
    title: 'Related Products'
}


export const preHeaderdata: IpreHeader ={
    title: 'Store Location: Lincoln-344, Illinois, Chicago, USA'
}

export const PopularProduct: Product ={
    title: 'Popular Products'
}

export const DetailProduct: FeatProduct ={
    title: 'Featured Products'
}

export const Latest: LatestNews ={
    title: 'Latest News'
}

export const MyShoppingCart: ShoppingCart ={
    title: 'My Shopping Cart'
}

//this is the code of footer
interface FooterSection {
    title: string;
    links: string[];
  }
  
  // Footer data
 export const footerData: FooterSection[] = [
    {
      title: "My Account",
      links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      links: ["Contact", "FAQs", "Terms & Condition", "Privacy Policy"],
    },
    {
      title: "Proxy",
      links: ["About", "Shop", "Product", "Track Order"],
    },
    {
      title: "Categories",
      links: ["Fruit & Vegetables", "Meat & Fish", "Bread & Bakery", "Beauty & Health"],
    },
  ];

  export interface BillingInfo {
    firstName: string;
    lastName: string;
    companyName?: string;
    streetAddress: string;
    country: string;
    state: string;
    zipCode: string;
    email: string;
    phone: string;
    orderNotes?: string;
    shipToDifferentAddress?: boolean;
  }
  export interface ProductType {
    quantity: number;
    price: ReactNode;
    title: string;
    rate: string;
    fixRate?: string;
    image: string;
    star?: string | number;
    badge?: string;
  }







