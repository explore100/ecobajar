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
