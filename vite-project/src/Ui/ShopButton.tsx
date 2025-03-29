import React from "react";

// Define props explicitly
interface ShopButtonProps {
  title: string; // Button text
  icon: React.ReactNode; // Icon component
}

const ShopButton = ({ title, icon }: ShopButtonProps) => {
  return (
    <button className="flex items-center justify-center w-[11.9375rem] h-[3.1875rem] rounded-full font-semibold text-base gap-[0.75rem] bg-[#FFFFFF] text-[#00B207]">
  {title} {icon}
</button>

  );
};

export default ShopButton;
