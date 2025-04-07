import { HotDealsdata } from "../Utility/Data"
import ViewButton from "../Ui/VIewButton";
import { hotproduct } from "../Types/Types";
import Card from "../Ui/Card";
const Hot = () => {
  return (
    <>
    <section className="h-[73.1875rem] w-full mt-[3.75rem] bg-[#F7F7F7]">
    <div className="flex justify-between items-center h-[2.375rem] pt-[3.75rem] w-[82.5rempx] px-[18.75rem]">
                <h1 className="font-semibold text-3xl">{HotDealsdata?.title}</h1>
                <ViewButton/>
            </div>
            <section className="w-[82.5rem] h-[44.625rem] my-[3.75rem] mx-[300px] grid  grid-cols-5">
              {
                hotproduct.ProductData.filter((item) => [18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].includes(item.id)).map((item, index) => (
                  <div key={item.id}>
                    <Card title={item.title} index={index} image={item.img} price={item.price} />
                  </div>
                ))
              }
            </section>
            
    </section>
    </>
  )
}

export default Hot