import React, { useState } from "react";
import { feature_developer_data } from "./Data";
import { projects_by_asset_developer } from "./Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const NewProjects = () => {
  const data = feature_developer_data;
  const myData = projects_by_asset_developer;

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
    if (id === data.length) {
      setActivePic(1);
    } else if (id < data.length) {
      setActivePic(activePic + 1);
    } else {
      setActivePic(data.length - 1);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="text-center py-5">
        <h1 className="text-xl font-semibold font-sans">New Projects</h1>
      </div>

      <div className="w-full flex items-center justify-center h-12 text-white bg-black">
        <h1 className="font-sans text-xl font-bold">Featured Developers</h1>
      </div>

      <div className="w-full px-3 md:px-0 py-5 h-full flex items-center justify-center">
        <div className="flex items-center w-full md:w-3/5 justify-center">
          {data.map((item) => {
            const { id, src } = item;
            return (
              <div
                key={id}
                className={
                  activePic === id
                    ? "flex justify-center items-center"
                    : "hidden"
                }
              >
                <div
                  onClick={() => handlePrevClick(id)}
                  className="bg-blue-600 p-3 mr-3 rounded-full cursor-pointer"
                >
                  <FaArrowAltCircleLeft className=" text-white" />
                </div>
                <div className="flex w-full md:w-3/5 rounded-xl items-center justify-center bg-black p-5">
                  <img
                    src={src}
                    alt=""
                    className=" rounded-xl w-[34rem] sm:w-[24rem] h-[11rem] md:w-96 md:h-48 "
                  />
                </div>
                <div
                  onClick={() => handleNextClick(id)}
                  className="bg-blue-600 ml-3 p-3 rounded-full cursor-pointer"
                >
                  <FaArrowAltCircleRight className="text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-12 text-white bg-black">
        <h1 className="font-sans text-xl font-bold">Discover New Projects</h1>
      </div>

      <div className="w-full px-2 my-6 items-center justify-center gap-2 md:gap-5 flex">
        {myData.map((item) => {
          const { id, src, city } = item;
          return (
            <div key={id}>
              <div className="border-2 flex flex-col items-center justify-center w-full md:w-60 rounded-3xl  border-yellow-700">
                <img src={src} alt="" className=" rounded-3xl" />
                <h1 className="py-2 md:py-5 font-bold font-sans">{city}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center h-12 text-white bg-black">
        <h1 className="font-sans text-xl font-bold">
          Projects By Asset Development
        </h1>
      </div>

      <div className="w-full px-2 my-6 items-center justify-center gap-2 md:gap-5 flex">
        {myData.map((item) => {
          const { id, src, city } = item;
          return (
            <div key={id}>
              <div className="border-2 flex flex-col items-center justify-center w-full md:w-60 rounded-3xl  border-yellow-700">
                <img src={src} alt="" className=" rounded-3xl" />
                <h1 className="py-2 md:py-5 font-bold font-sans">{city}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProjects;
