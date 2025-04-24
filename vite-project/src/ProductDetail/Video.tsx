import ReactPlayer from "react-player";
import { date } from "../Types/Types";

const Video = () => {
  return (
    <>
      <div className=" mt-[32px] rounded-lg">
        <ReactPlayer
          url="https://youtu.be/00ZnZhQvbe0?si=OFIWdAovcyNv7-J7"
          className="react-player"
          controls={true}
          width="536px"
          height="300px"
          playing={true}
        />
        <div className="w-[536px] h-[91px] mt-[24px] bg-[#FFFFFF] flex border-2 border-[#E6E6E6] rounded-md py-[24px] px-[20px] gap-[30px]">
            {
              date.FeatureData.slice(4, 6).map((item, index) => (
                <div key={index} >
                  <div className="flex items-center gap-[8px]">
                    <img src={item.img} className="h-[2rem] w-[2rem]" />
                    <div className="w-[198px] h-[43px]">
                      <h1 className="text-sm font-medium">{item.title}</h1>
                      <p className="text-sm font-normal text-[#808080]">{item.description}</p>
                    </div>
                  </div>

                </div>
              ))
            }

            
        </div>
      </div>
    </>
  );
};

export default Video;
