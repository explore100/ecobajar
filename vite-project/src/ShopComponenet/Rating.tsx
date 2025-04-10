import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const ratings = [5, 4, 3, 2, 1];

const RatingFilter: React.FC = () => {
    const [selectedRating, setSelectedRating] = useState<number | null>(4);

    return (
        <div className="w-[19.5rem] h-[18.0625rem]">
             <div className="py-[1.25rem] border-t-2 flex justify-between items-center">
                            <span className="font-medium text-xl ">Rating</span>
                            <span><FaChevronUp /></span>
                        </div>

            <div className="space-y-3">
                {ratings.map((rating) => (
                    <label
                        key={rating}
                        className="flex items-center cursor-pointer gap-2"
                    >
                        <input
                            type="checkbox"
                            checked={selectedRating === rating}
                            onChange={() =>
                                setSelectedRating((prev) => (prev === rating ? null : rating))
                            }
                            className="form-checkbox bg-[#00B207] h-5 w-5"
                        />
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) =>
                                i < rating ? (
                                    <FaStar key={i} className="text-orange-400" />
                                ) : (
                                    <FaRegStar key={i} className="text-gray-300" />
                                )
                            )}
                            <span className="ml-2 text-gray-800">{rating}.0 & up</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RatingFilter;
