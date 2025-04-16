import ShopButton from "../Ui/ShopButton"


const Coupon = () => {
  return (
    <>
    <section className="w-[872px] h-[92px] mt-[24px] ml-[300px] flex justify-evenly items-center border-2 rounded-lg">
        <div>
            <h1 className="font-medium text-xl">Coupon code</h1>
        </div>
        <div className="relative w-[33.5rem] h-[3.25rem] flex items-center">
                    <input
                        type="text"
                        placeholder="Enter code"
                        className="border border-[#E5E5E5] bg-[#FFFFFF] w-full h-full rounded-[2.875rem] py-[0.875rem] px-[1.5rem] pr-[6rem]" // Add right padding to avoid overlap
                    />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <ShopButton
                            title="Apply Coupon"
                            icon=""
                            bgcolor="bg-[#333333]" 
                            textcolor="text-[#FFFFFF]"

                        />
                    </div>
                </div>
    </section>
    </>
  )
}

export default Coupon