import { IpreHeader, Product, FeatProduct, LatestNews, HotDeals,  } from "../Types/Types";

export const  HotDealsdata: HotDeals ={
  title: "Hot Deals"
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







