import { hotproduct } from "../Types/Types";
import { PopularProduct } from "../Utility/Data"
import Card from "../Ui/Card";
import ViewButton from "../Ui/VIewButton";


const Deals = () => {
    return (
        <section className="w-[82.5rem] h-[44.625rem] my-[3.75rem] mx-[300px]">
            <div className="flex justify-between h-[2.375rem] mt-[3.75rem] w-[82.5rempx]">
                <h1 className="font-semibold text-3xl">{PopularProduct?.title}</h1>
                <ViewButton/>
            </div>
            <div className=" grid  grid-cols-5 mt-[2rem]">
                {
                    hotproduct.ProductData.map((item, index) => (
                        <Card title={item.title} index={index} image={item.img} price={item.price} />
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Deals