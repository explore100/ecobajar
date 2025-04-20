import  { useState } from "react";
import { hotproduct } from "../Types/Types";

const ImageDeat = () => {
  // Initial image (you can set this to any product's image)
  const [selectedImage, setSelectedImage] = useState(
    hotproduct.ProductData[0].img
  );

  // We'll use first 5 items to simulate different options (for now same or different images)
  const thumbnails = hotproduct.ProductData.slice(0, 4);

  return (
    <div className="flex w-[648px] h-[556px] mt-[32px] ml-[300px] border border-dashed border-gray-300">
      {/* Thumbnails */}
      <div className="w-[80px] h-[396px] flex flex-col items-center justify-between py-4">
        {thumbnails.map((item, index) => (
          <div
            key={index}
            className={`w-[60px] h-[60px] border-2 cursor-pointer ${
              selectedImage === item.img ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(item.img)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={selectedImage}
          alt="Selected Vegetable"
          className="w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ImageDeat;
