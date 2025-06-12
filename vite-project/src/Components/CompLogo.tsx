import { companylogo } from "../Types/Types";

const CompLogo = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[18.75rem] py-6">
      <div className="w-full max-w-[1320px] mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-y-6">
        {companylogo.CompanyLogoData.map((item, index) => (
          <div
            key={index}
            className={`pr-6 lg:pr-[5rem] ${index !== companylogo.CompanyLogoData.length - 1 ? "border-r-2" : ""} border-gray-200`}
          >
            <img
              src={item.img}
              alt={`Company logo ${index}`}
              className="w-[5.1rem] h-[2rem] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompLogo;
