import { FaChevronUp } from "react-icons/fa";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 2000;

const PriceRangeSlider: React.FC = () => {
    const [values, setValues] = useState<[number, number]>([50, 1500]);

    return (
        <div className="w-[19.5rem] h-[9.3125rem]">
            <div className="pt-[1.25rem] border-t-2 flex justify-between items-center">
                <span className="font-medium text-xl ">Price</span>
                <span><FaChevronUp /></span>
            </div>

            <Range
                values={values}
                step={10}
                min={MIN}
                max={MAX}
                onChange={(vals) => setValues(vals as [number, number])}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-[0.375rem] w-full rounded-md mt-[1.375rem]"
                        style={{
                            ...props.style,
                            background: getTrackBackground({
                                values,
                                colors: ["#ccc", "green", "#ccc"],
                                min: MIN,
                                max: MAX,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-[18px] w-[18px] bg-white border-[3px] border-green-600 rounded-full outline-none shadow-sm"
                        style={props.style}
                    />
                )}
            />

            <div className="text-sm text-[#1A1A1A] mt-[1rem]">
                Price: <strong>{values[0]}</strong> — <strong>{values[1]}</strong>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
