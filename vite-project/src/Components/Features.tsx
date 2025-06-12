import { date } from "../Types/Types";

const Features = () => {
  return (
    <section className="w-full max-w-[1360px] mx-auto mt-6 px-4 xl:px-0">
      <div className="bg-white shadow-lg rounded-lg py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {date.FeatureData.slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-base font-semibold">{item.title}</h1>
                <p className="text-sm text-[#999999]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
