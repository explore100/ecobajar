import { hotproduct } from "../Types/Types"
import { FaStar } from "react-icons/fa";

function SaleProduct() {
  return (
    <>
      <section className="w-[19.5rem] h-[26.875rem]">
        <h1 className="py-[18px] font-medium text-xl "> Sale Products</h1>
        <section className="w-[312px] h-[368px] gap-[1rem]">
          {hotproduct.ProductData.filter((item) => [28, 30, 26].includes(item.id)).map((item) => (
            <div key={item.id} className="mb-[16px]">
              <div className="h-[112px] w-[312px] border-2 rounded-md hover:border-green-600  hover:shadow-lg flex">
                <div className="w-[112px] h-[112px] px-[5px] py-[5px]">
                  <img src={item.img} />
                </div>
                <div className="w-[200px] h-[112px] px-[12px] py-[24px]">
                  <div className="w-[176px] h-[45px] " >
                    <h2 className="text-[#4D4D4D] text-sm font-normal">{item.title}</h2>
                    <p className="font-medium text-base text-[#1A1A1A]">{item.price}</p>
                  </div>
                  

                    <div className="flex gap-[1px] w-[60px] h-[12px]">
                      {[...Array(5)].map((_, index) => (
                        <button key={index} className={index === 4 ? "text-[#CCCCCC]" : "text-[#FF8A00]"}>
                          <FaStar />
                        </button>
                      ))}
                    </div>
                  
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default SaleProduct