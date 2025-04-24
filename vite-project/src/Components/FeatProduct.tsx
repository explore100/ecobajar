
import { hotproduct } from "../Types/Types";
import Card from "../Ui/Card";
import ViewButton from "../Ui/VIewButton";
import { DetailProduct } from "../Utility/Data"

const FeatProduct = () => {
  
  return (
    <>
    <section className="w-[82.5rem] h-[24.8125rem] mx-[18.75rem] my-[3.75rem]">
        <div className="w-[82.5rem] h-[2.375rem] flex justify-between items-center">
            <h1 className="font-semibold text-3xl">{DetailProduct?.title}</h1>
            <ViewButton/>
        </div>
        <div className=" grid  grid-cols-5 mt-[2rem]">
        {
                    hotproduct.ProductData.slice(0,5).map((item) => (
                      <Card   title={item.title} id={item.id} img={item.img} price={item.price} />
                    ))
                }
        </div>
    </section>
    </>
  )
}

export default FeatProduct