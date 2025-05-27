import { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

const PopularTags = () => {
  const tags = [
    'Healthy',
    'Low fat',
    'Vegetarian',
    'Kid foods',
    'Vitamins',
    'Bread',
    'Meat',
    'Snacks',
    'Tiffin',
    'Launch',
    'Dinner',
    'Breakfast', // fixed typo
    'Fruit',
  ];

  const [activeTag, setActiveTag] = useState('Low fat');

  const handleClick = (tag: string) => {
    setActiveTag(tag === activeTag ? '' : tag);
  };

  return (
    <div className="h-[18.3125rem] w-[19.5rem]">
      <div className="py-[1.25rem] border-t-2 flex justify-between items-center">
                                  <span className="font-medium text-xl ">Popular Tag</span>
                                  <span><FaChevronUp /></span>
                              </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleClick(tag)}
            className={`px-4 py-1 rounded-full text-sm border transition ${
              tag === activeTag
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-black'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;