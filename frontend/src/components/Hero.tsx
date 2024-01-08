import { sliderItems } from "../data";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";


const Hero = () => {
  const [index, setIndex] = useState<number>(0);

  const length = sliderItems.length;

  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  if (!Array.isArray(sliderItems) || sliderItems.length <= 0) {
    return null;
  }

  return (
    <div className="flex bg-slate-300 select-none w-full h-[550px] md:h-screen overflow-x-hidden overflow-y-hidden mx-auto justify-between items-center ">
      <button className="text-5xl lg:text-6xl" onClick={() => prevSlide()}>
        <IoIosArrowBack />
      </button>
      <div
        className="justify-center items-center flex flex-col sm:flex-row gap-6 md:gap-1 lg:gap-24"
        key={sliderItems[index].id}
      >
        <img className=" sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[700px] w-80 h-72 lg:pt-32 object-contain pt-12 sm:pt-12 "
          src={sliderItems[index].img}
          alt={sliderItems[index].title}
        />
       
       <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6 text-center lg:text-left">
       <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">{sliderItems[index].title}</h1>
        <p className="text-md  sm:text-lg w-72 sm:w-full">{sliderItems[index].desc}</p>
       </div>
      </div>
      <button className="rotate-180  text-5xl lg:text-6xl " onClick={() => nextSlide()}>
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default Hero;
