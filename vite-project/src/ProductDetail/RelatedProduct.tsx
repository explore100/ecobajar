import { hotproduct } from "../Types/Types"
import Card from "../Ui/Card"
import { Related } from "../Utility/Data"


const RelatedProduct = () => {
  return (
   <>
   <section className="w-full max-w-[85rem] mx-auto my-[80px]">

         <div className=" h-[2.375rem]  flex justify-center items-center">
              <h1 className="font-semibold text-3xl">{Related?.title}</h1>
         </div>
         <div className="grid grid-cols-5 mt-[2rem] gap-[24px]">

         {
                     hotproduct.ProductData.slice(0,5).map((item) => (
                        <Card  title={item.title} id={item.id} img={item.img} price={item.price} />
                     ))
                }
         </div>
   </section>
   </>
  )
}

export default RelatedProduct