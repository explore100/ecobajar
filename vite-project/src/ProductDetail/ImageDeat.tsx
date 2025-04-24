import { useState } from "react";
import { hotproduct } from "../Types/Types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProductDetail from "./Description";


const ImageDeat = () => {
  const product = hotproduct.ProductData[2]; // Example: Chinese Cabbage (id: 20)
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <>
    
    <section className="flex mt-[32px] gap-[24px]">
      <div className="flex w-[648px] h-[556px] ml-[300px] gap-[12px]">
        {/* Thumbnails */}
        <div className="w-[80px] h-[396px] flex flex-col items-center justify-between py-4">
          <IoIosArrowUp className="h-[24px] w-[24px]" />
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`w-[80px] h-[90px] hover:border cursor-pointer mt-[12px] ${
                selectedImage === img ? "hover:border-green-500" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <IoIosArrowDown className="h-[24px] w-[24px]" />
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Selected Vegetable"
            className="w-[556px] h-[556px] object-contain"
          />
        </div>
      </div>

      {/* Product Description (you can pass the product as prop too) */}
      <ProductDetail />
    </section>
    </>
  );
};

export default ImageDeat;
