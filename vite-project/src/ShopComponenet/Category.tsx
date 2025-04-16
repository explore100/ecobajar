import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import PriceRangeSlider from "./Price";
import RatingFilter from "./Rating";
import PopularTags from "./Popular";
import DisProduct from "./DisProduct";
import SaleProduct from "./SaleProduct";

type Category = {
    label: string;
    count: number;
    total: number;
};

const categories: Category[] = [
    { label: "Fresh Fruit", count: 25, total: 134 },
    { label: "Vegetables", count: 150, total: 150 },
    { label: "Cooking", count: 54, total: 54 },
    { label: "Snacks", count: 47, total: 47 },
    { label: "Beverages", count: 43, total: 43 },
    { label: "Beauty & Health", count: 38, total: 38 },
    { label: "Bread & Bakery", count: 15, total: 15 },
];

const CategoryFilter: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Vegetables");

    return (
        <>
            <section className="h-[112.4375rem] w-[19.5rem]">
                <div className=" h-[21.4375rem] w-[19.5rem] mt-[1.5rem] ">
                    <div className="text-lg font-semibold mb-2 flex justify-between items-center">
                        <span>All Categories</span>
                        <span><FaChevronUp /></span>
                    </div>
                    <div className="space-y-3">
                        {categories.map((cat) => (
                            <label
                                key={cat.label}
                                className="flex items-center cursor-pointer text-gray-800"
                            >
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat.label}
                                    checked={selectedCategory === cat.label}
                                    onChange={() => setSelectedCategory(cat.label)}
                                    className="form-radio h-4 w-4 text-green-600"
                                />
                                <span className="ml-2">
                                    {cat.label} ({cat.count})
                                    <span className="ml-1 text-gray-400 text-sm">({cat.total})</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            <PriceRangeSlider />
            <RatingFilter/>
            <PopularTags/>
            <DisProduct/>
            <SaleProduct/>
            </section>
        </>
    );
};

export default CategoryFilter;
