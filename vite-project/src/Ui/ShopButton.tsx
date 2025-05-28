interface ButtonProps{
  title: string;
  icon: React.ReactNode;
  bgcolor: string;
  textcolor: string; 
   onClick?: () => void; // optional property with default value
}

const ShopButton = ({title, icon, bgcolor, textcolor, onClick}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center  w-[11.9375rem] h-[3.1875rem] py-[0.875rem] hover:text-white-400 hover:bg-green-900 rounded-full font-semibold  text-base gap-[0.75rem]  ${bgcolor} ${textcolor}`}
      onClick={onClick}
    >
      {title} {icon}
    </button>
  );
};

export default ShopButton;