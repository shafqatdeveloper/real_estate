import React, { useState } from "react";
import logo from "./assets/logo.png";
import { before_after_data } from "./Data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const BeforeAfter = () => {
  const data = before_after_data;

  const [activePic, setActivePic] = useState(1);

  const handlePrevClick = (id) => {
    if (id === 1) {
      setActivePic(data.length);
    } else if (id > 1) {
      setActivePic(activePic - 1);
    } else {
      setActivePic(data.length - 1);
    }
  };

  const handleNextClick = (id) => {
    if (id === activePic.length) {
      setActivePic(1);
    } else if (id < data.length) {
      setActivePic(activePic + 1);
    } else {
      setActivePic(data.length - 1);
    }
  };

  return (
    <div className="w-full mt-1 h-full flex flex-col items-center ">
      <div className="w-full h-[250px] md:h-[200px] text-center bg-building bg-center">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-black/50">
          <div className="bg-black/70 p-3 rounded-xl">
            <img src={logo} alt="" className="w-24" />
          </div>
          <h1 className="text-2xl text-white font-bold pt-5 md:pl-5">
            ASSET BUILDER HOME PROJECT
          </h1>
        </div>
      </div>
      <div className="w-full h-8 bg-[#A16550]"></div>
      <div className="mt-3">
        <h1 className="text-center py-7 text-3xl font-bold ">
          ASSET BUILDER HOME PROJECT
        </h1>
        <div className="py-3">
          <div className="w-full flex items-center justify-center md:px-10 h-full">
            {data.map((item) => {
              const { id, src } = item;
              return (
                <div
                  key={id}
                  className={
                    activePic === id
                      ? "flex items-center justify-center"
                      : "hidden"
                  }
                >
                  <div className="bg-[#A16550] text-white mx-4 rounded-full">
                    <AiOutlineArrowLeft
                    onClick={() => handlePrevClick(id)} 
                      size={35}
                      className='p-2 cursor-pointer'
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={src}
                      alt=""
                      className=" w-[48rem] rounded-2xl h-[15rem] sm:h-[20rem]  md:h-[30rem]"
                    />
                  </div>
                  <div className="bg-[#A16550] text-white mx-4 rounded-full">
                    <AiOutlineArrowRight
                      size={35}
                      className='p-2 cursor-pointer'
                      onClick={() => handleNextClick(id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-5  font-semibold font-sans w-4/5">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generator
        </p>
      </div>
    </div>
  );
};


export default BeforeAfter;
