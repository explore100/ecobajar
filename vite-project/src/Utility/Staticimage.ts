// Import all images
import image1 from "../assets/Image/image 1.png";
import image2 from "../assets/Image/image2.png";
import image3 from "../assets/Image/image3.png";
import image4 from "../assets/Image/image4.png";
import image5 from "../assets/Image/image5.png";
import image6 from "../assets/Image/image6.png";
import image7 from "../assets/Image/image7.png";
import image8 from "../assets/Image/image8.png";
import image9 from "../assets/Image/image9.png";
import image10 from "../assets/Image/image10.png";
import image11 from "../assets/Image/image11.png";
import image12 from "../assets/Image/image12.png";

// Define type for images
type StaticImages = {
  [key: string]: string;
};

// Export images as an object with proper typing
export const STATICS_IMAGE: StaticImages = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
};

import truck from "../assets/Image/delivery-truck 1.png";
import headphone from "../assets/Image/headphones 1.png";
import shoppingbag from "../assets/Image/shopping-bag.png";
import box from "../assets/Image/package.png";

type FeatureImage = {
  [key: string]: string;
};

export const Feature_Image: FeatureImage = {
  truck,
  headphone,
  shoppingbag,
  box,
};

import pear from "../assets/Image/pear.png";
import orange from "../assets/Image/ora.png";
import chines from "../assets/Image/chines .png";
import curlys from "../assets/Image/green vegi.png";
import brinjal from "../assets/Image/brinjal.png";
import potato from "../assets/Image/potato.png";
import maze from "../assets/Image/maze.png";
import cauli from "../assets/Image/cauli.png";
import capcicon from "../assets/Image/capsicon.png";
import chilli from "../assets/Image/chilli.png";
type VegetableImage = {
  [key: string]: string;
};

export const Vegetable_Image: VegetableImage = {
  pear,
  orange,
  chines,
  curlys,
  brinjal,
  potato,
  maze,
  cauli,
  capcicon,
  chilli,
};


import mix from "../assets/Image/mix.png";
import meat from "../assets/Image/meat.png";
import yellow from "../assets/Image/yellow.png";

type FruitImage = {
  [key: string]: string;
};

export const Fruit_Image: FruitImage = {
  mix,
  meat,
  yellow,
};

// THis image are of Latest.tsx
import ora from "../assets/Image/orange.png";
import egg from "../assets/Image/omlet.png";
import salad from "../assets/Image/salad.png";

type LatestImage = {
  [key: string]: string;
};
export const Latest_Image: LatestImage ={
  ora,
  egg,
  salad,
};

// this is the code of Testimonial.tsx
import personA from "../assets/Image/person1.png";
import personB from "../assets/Image/person2.png";
import personc from "../assets/Image/person3.png";

type Person  ={
  [key: string]: string;
}

export const Person_Image: Person ={
    personA,
    personB,
    personc,
};

// this is the code of comp logo

import logoA from "../assets/Image/step.png";
import logoB from "../assets/Image/mago.png";
import logoC from "../assets/Image/foodnet.png";
import logoD from "../assets/Image/ood.png";
import logoE from "../assets/Image/book.png";
import logoF from "../assets/Image/gseries.png";

type CompLogo = {
  [key: string]: string;
}
export const Comp_logo: CompLogo ={
  logoA,
  logoB,
  logoC,
  logoD,
  logoE,
  logoF,
}

// this is the code of Insta.tsx

import insta1 from "../assets/Image/tom.png";
import insta2 from "../assets/Image/lea.png";
import insta3 from "../assets/Image/leaf.png";
import insta4 from "../assets/Image/blackcap.png";
import insta5 from "../assets/Image/sag.png";
import insta6 from "../assets/Image/lime.png";

type Instagram = {
  [key: string]: string;
}

export const Instagram_Image: Instagram ={
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
}

// this is the code of footer.tsx
import footerA from "../assets/Image/applepay.png";
import footerB from "../assets/Image/visa.png";
import footerC from "../assets/Image/discover.png";
import footerD from "../assets/Image/mastercard.png";
import footerE from "../assets/Image/Cart.png";
type FooterLogo = {
  [key: string]: string;
}
export const Footer_LOGO: FooterLogo ={
  footerA,
  footerB,
  footerC,
  footerD,
  footerE,
}


