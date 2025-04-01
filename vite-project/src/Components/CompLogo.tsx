import { companylogo } from "../Types/Types"


const CompLogo = () => {
  return (
    <>
    <section className="mx-[18.75rem] h-[9.5rem] w-[1320px] flex justify-between items-center ">
        {
          companylogo.CompanyLogoData.map((item, index) => (
            <div key={index} className="border-r-4 pr-[5rem]">
              <img src={item.img}  className="w-[5.0987rem] h-[2rem] " />
            </div>
          ))
        }
    </section>
    </>
  )
}

export default CompLogo