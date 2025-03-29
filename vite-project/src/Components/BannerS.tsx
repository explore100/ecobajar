import { bannerproduct } from "../Types/Types"

const BannerS = () => {
  return (
    <>
        <section className="w-[82.5rem] h-[33.5rem] mx-[18.75rem] my-[3.75rem] flex gap-[1.5rem]">
          {
            bannerproduct.BannerProductData.map((item, index) => (
              <div key={index} className="">
                <img src={item.img} className="w-[26.5rem] h-[33.5rem]" />
              </div>
            ))
          }
        </section>
    </>
  )
}

export default BannerS