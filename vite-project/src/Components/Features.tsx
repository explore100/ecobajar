import { date } from "../Types/Types"


const Features = () => {
  return (
    <section className="w-[85rem] h-[8rem] mx-[18.75rem] mt-[1.5rem] rounded-lg shadow-md ">
      <div className="flex items-center">
        {
          date.FeatureData.slice(0, 4).map((item, index) => (
            <div key={index} className="h-[3rem] w-[19.125rem] gap-[1rem] mx-[2.5rem] my-[2.5rem] flex">
              <img src={item.img} className="h-[2.5rem] w-[2.5rem]" />
              <div className="w-[15.625rem] h-[3rem]">
                <h1 className="text-base font-semibold">{item.title}</h1>
                <p className="text-sm font-normal text-[#999999]">{item.description}</p>
              </div>

            </div>

          ))
        }
      </div>
      
    </section>
  )
}

export default Features