import React from "react";
import { MdOutlineHouse } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import logo from "./assets/logo.png";
import aboutpic from "./assets/about_pic.jpg";
import whatwedo from "./assets/whatwedo.jpg";
import expo from "./assets/expo.jpg";
import app from "./assets/app.jpg";
import MapView from "./MapView";

const AboutUs = () => {
  return (
    <div className="w-full my-1 h-full">
      <div className="w-full flex text-white bg-black items-center justify-between h-[230px]">
        <div className=" flex pl-2 md:pl-7 flex-col items-center justify-self-center w-2/5 md:w-1/5">
          <img src={logo} alt="" className="w-24" />
          <div>
            <h1 className="text-2xl font-bold font-sans py-2">About Us</h1>
            <p className="text-xs">
              Asset Builder is Pakistan's largest online Real Estate Portal
              Connecting Sellers with Buyers
            </p>
          </div>
        </div>
        <div className="h-full w-[50%] md:w-[25%] rounded-bl-full bg-yellow-400">
          <div className="mt-8">
            <MdOutlineHouse
              size={45}
              className="text-blue-500 border-2 border-white rounded-full p-1 ml[-3rem]"
            />
            <GiAutoRepair
              size={45}
              className="text-blue-500 border-2 border-white rounded-full p-1 ml-3 mb-4 mt-6"
            />
            <FaHandHoldingUsd
              size={45}
              className="text-blue-500 border-2 p-1 border-white rounded-full  ml-[76px] "
            />
          </div>
        </div>
      </div>
      <div className="my-5 font-sans md:w-2/5 px-5">
        <h1 className="text-2xl my-2 font-bold font-signature">
          How did it all Start?
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using
          <p>
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </p>
        <p className="py-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>

      <div className="grid grid-cols-1 py-6 px-5 md:grid-cols-2 gap-3">
        <div className="border-2 border-yellow-700">
          <div className="flex items-center justify-between">
            <div className="px-2 w-3/4">
              <h1 className="font-sans md:text-lg font-bold">
                Exclusive Marketing
              </h1>
              <p className="py-2 text-xs md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <h1 className="font-sans md:text-lg font-bold">
                View Our Projects
              </h1>
            </div>
            <img
              src={aboutpic}
              alt=""
              className="w-32 md:w-48 h-44 md:h-64 object-center rounded-tl-full"
            />
          </div>
        </div>
        <div className="border-2 border-yellow-700">
          <div className="flex items-center justify-between">
            <div className="px-2 w-3/4">
              <h1 className="font-sans md:text-lg font-bold">What Do we Do?</h1>
              <p className="py-2 text-xs md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
            <img
              src={whatwedo}
              alt=""
              className="w-32 md:w-48 h-44 md:h-64 object-center rounded-tl-full"
            />
          </div>
        </div>
        <div className="border-2 border-yellow-700">
          <div className="flex items-center justify-between">
            <div className="px-2 w-3/4">
              <h1 className="font-sans md:text-lg font-bold">Expos</h1>
              <p className="py-2 text-xs md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
            <img
              src={expo}
              alt=""
              className="w-32 md:w-48 h-44 md:h-64 object-center rounded-tl-full"
            />
          </div>
        </div>
        <div className="border-2 border-yellow-700">
          <div className="flex items-center justify-between">
            <div className="px-2 w-3/4">
              <h1 className="font-sans md:text-lg font-bold">Mobile App</h1>
              <p className="py-2 text-xs md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
            <img
              src={app}
              alt=""
              className="w-32 md:w-48 h-44 md:h-64 object-center rounded-tl-full"
            />
          </div>
        </div>
      </div>
      <div className="my-5 w-full bg-slate-500 py-8 h-full">
        <div className="px-5">
          <h1 className="py-3 text-3xl font-bold text-white">
            Our Home Partners
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="bg-gradient-to-b text-white h-[100px] px-4 flex items-center justify-between from-yellow-400 via-yellow-600 to-yellow-700">
              <h1 className="text-2xl font-bold">HBL</h1>
              <div className="flex flex-col pl-5 justify-center">
                <h1>HABIB BANK</h1>
                <h1>حبیب بینک</h1>
              </div>
            </div>
            <div className="bg-gradient-to-b text-white h-[100px] px-4 flex items-center justify-between from-[#70207C] to-[#5b1167]">
              <h1 className="text-2xl font-bold">MBL</h1>
              <div className="flex flex-col pl-5 justify-center">
                <h1>MEEZAN BANK</h1>
                <h1>میزان بینک</h1>
              </div>
            </div>
            <div className="bg-[#da6731] text-white h-[100px] px-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold">BOP</h1>
              <div className="flex flex-col pl-5 justify-center">
                <h1>PUNJAB BANK</h1>
                <h1>پنجاب بینک</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapView />
    </div>
  );
};

export default AboutUs;
