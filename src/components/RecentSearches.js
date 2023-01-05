import React from "react";
import bedroom from "./assets/bedroom.png";
import project from "./assets/project.png";
import cal from "./assets/cal.png";
import location from "./assets/location.png";
import convertor from "./assets/convertor.png";
import record from "./assets/record.png";
import sofa from "./assets/sofa.png";
import appliance from "./assets/appliance.png";
import room from "./assets/room.png";
import store from "./assets/store.png";
import chair from "./assets/chair.png";
import agency from "./assets/agency.png";
import dining from "./assets/dining.png";
import house from "./assets/house1.png";
import home from "./assets/home.png";
import siren from "./assets/siren.png";
import chat from "./assets/chat.png";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineMyLocation, MdPlace } from "react-icons/md";
import Chart from "./Chart";

// import building from './assets/building.png'

const RecentSearches = () => {
  return (
    <div className="w-full pt-1 h-full">
      {/* City and Location wise search */}
      <div className="w-full  h-[470px] md:h-[400px] bg-building bg-bottom">
        <div className="w-full flex flex-col items-center justify-center h-full bg-black/40">
          <h1 className="capitalize py-5 text-3xl font-bold text-white">
            pakistan real estate prices index
          </h1>
          <div className="w-[52%] h-[17rem]  md:w-[60%] md:h-[14rem] xl:h-[5rem] p-2 gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid bg-black/60 rounded-md ">
            <div className="border-2 pl-1 w-min md:w-full rounded-md text-white px-2 py-2 border-yellow-700">
              <h1 className="font-bold pb-2 text-xs">Property Type</h1>
              <select className="pr-10 focus:outline-none bg-transparent">
                <option className="bg-yellow-700 text-black py-2" value="">
                 Select Property
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  House
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Banglo
                </option>
              </select>
            </div>
            <div className="border-2 pr-3 w-min md:w-full rounded-md text-white pl-2 py-2 border-yellow-700">
              <h1 className="font-bold pb-2 text-xs">City</h1>
              <select className="pr-10  bg-transparent">
                <option
                  className="bg-yellow-700 focus:outline-none text-black py-2"
                  value=""
                >
                  SELECT CITY
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Lahore
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Islamabad
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Karachi
                </option>
              </select>
            </div>
            <div className="border-2 pl-1 w-min md:w-full rounded-md text-white pr-2 py-2 border-yellow-700">
              <h1 className="font-bold pb-2 text-xs">Location</h1>
              <select className="pr-10 focus:outline-none bg-transparent">
                <option className="bg-yellow-700 text-black py-2" value="">
                  SELECT CITY
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                 Lahore
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Islamabad
                </option>
                <option className="bg-yellow-700 text-black py-2" value="">
                  Karachi
                </option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                type=""
                className="bg-orange-300 w-min rounded-md px-5 py-2 md:px-0 md:py-0 md:w-3/4 h-3/4 text-white"
              >
                FIND
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 py-5 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex items-center">
          <img src={project} alt="" className="w-[70px] md:w-36" />
          <div>
            <h1 className="font-bold">NEW PROJECTS</h1>
            <h1 className="text-xs">The Best oppurtunities of investment</h1>
          </div>
        </div>
        <div className="flex pr-2 items-center">
          <img src={cal} alt="" className="w-[60px] md:w-36" />
          <div>
            <h1 className="font-bold">HOME LOAN CALCULATOR</h1>
            <h1 className="text-xs">Track Charge</h1>
          </div>
        </div>
        <div className="flex items-center">
          <img src={location} alt="" className="w-[70px] md:w-36" />
          <div>
            <h1 className="font-bold">Area Guidelines</h1>
            <h1 className="text-xs">Explore housing socities in Pakistan</h1>
          </div>
        </div>
        <div className="flex items-center">
          <img src={location} alt="" className="w-[70px] md:w-36" />
          <div>
            <h1 className="font-bold">Plot Finder</h1>
            <h1 className="text-xs">Find Places in any housing society</h1>
          </div>
        </div>
        <div className="flex  items-center">
          <img src={convertor} alt="" className="w-[70px] md:w-36" />
          <div>
            <h1 className="font-bold">AREA UNIT CONVERTOR</h1>
            <h1 className="text-xs">convert any unit instantly</h1>
          </div>
        </div>
        <div className="flex items-center">
          <img src={record} alt="" className="w-[70px] md:w-36" />
          <div>
            <h1 className="font-bold">LAND RECORD PAGES</h1>
            <h1 className="text-xs">find out ownership details of land</h1>
          </div>
        </div>
      </div>
      <div className="w-full px-2 md:px-3 xl:px-7 h-full">
        <h1 className="text-2xl font-bold">FURNITURE</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-center">
            <img
              src={bedroom}
              alt=""
              className=" w-20 md:w-36 lg:w-40  xl:w-48"
            />
            <h1>BEDROOM</h1>
          </div>
          <div className="flex items-center">
            <img src={sofa} alt="" className="w-16 md:w-28 lg:w-32 xl:w-40" />
            <h1 className="pl-3">LIVING ROOM</h1>
          </div>
          <div className="flex items-center">
            <img
              src={appliance}
              alt=""
              className="w-16 md:w-28 lg:w-32 xl:w-40"
            />
            <h1 className="pl-3">APPLIANCES</h1>
          </div>
          <div className="flex items-center">
            <img src={home} alt="" className="w-16 md:w-28 lg:w-32 xl:w-40" />
            <h1 className="pl-3">APPLIANCES</h1>
          </div>
          <div className="flex lg:pl-4 items-center">
            <img src={store} alt="" className="w-16 md:w-28 lg:w-32 xl:w-40" />
            <h1 className="pl-3">STORAGE</h1>
          </div>
          <div className="flex lg:pr-4 items-center">
            <img src={chair} alt="" className="w-20 md:w-36  lg:w-40 xl:w-48" />
            <h1 className="">WORK STATIONS</h1>
          </div>
          <div className="flex items-center">
            <img src={room} alt="" className="w-16 md:w-28 lg:w-32 xl:w-40" />
            <h1 className="pl-3">KIDS ROOM</h1>
          </div>
          <div className="flex items-center">
            <img src={dining} alt="" className="w-16 md:w-28 lg:w-32 xl:w-40" />
            <h1 className="pl-3">DINING ROOM</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-full px-3 md:px-4 lg:px-6 xl:px-7 ">
        <h1 className="text-2xl py-5 font-bold">RECENT SEARCHES</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className="border-4 p-2 border-yellow-500  rounded-xl">
            <div className="flex items-center">
              <BiSearchAlt size={26} />
              <h1 className="pl-5 text-lg font-bold">Houses for Sale</h1>
            </div>
            <h1 className="text-xs pl-4">All Area Sizes</h1>
            <div className="flex my-1 items-center">
              <MdOutlineMyLocation size={26} />
              <h1 className="pl-5">Islamabad</h1>
            </div>
            <div className="flex items-center">
              <MdPlace size={26} />
              <h1 className="pl-5">Any Place</h1>
            </div>
          </div>
          <div className="border-4 p-2 border-yellow-500  rounded-xl">
            <div className="flex items-center">
              <BiSearchAlt size={26} />
              <h1 className="pl-5 text-lg font-bold">Houses for Rent</h1>
            </div>
            <h1 className="text-xs pl-4">All Area Sizes</h1>
            <div className="flex my-1 items-center">
              <MdOutlineMyLocation size={26} />
              <h1 className="pl-5">Islamabad</h1>
            </div>
            <div className="flex items-center">
              <MdPlace size={26} />
              <h1 className="pl-5">Any Place</h1>
            </div>
          </div>
          <div className="border-4 p-2 border-yellow-500  rounded-xl">
            <div className="flex items-center">
              <BiSearchAlt size={26} />
              <h1 className="pl-5 text-lg font-bold">Shops for Sale</h1>
            </div>
            <h1 className="text-xs pl-4">All Area Sizes</h1>
            <div className="flex my-1 items-center">
              <MdOutlineMyLocation size={26} />
              <h1 className="pl-5">Islamabad</h1>
            </div>
            <div className="flex items-center">
              <MdPlace size={26} />
              <h1 className="pl-5">Any Place</h1>
            </div>
          </div>
          <div className="border-4 p-2 border-yellow-500  rounded-xl">
            <div className="flex items-center">
              <BiSearchAlt size={26} />
              <h1 className="pl-5 text-lg font-bold">Shops for Rent</h1>
            </div>
            <h1 className="text-xs pl-4">All Area Sizes</h1>
            <div className="flex my-1 items-center">
              <MdOutlineMyLocation size={26} />
              <h1 className="pl-5">Islamabad</h1>
            </div>
            <div className="flex items-center">
              <MdPlace size={26} />
              <h1 className="pl-5">Any Place</h1>
            </div>
          </div>
          <div className="border-4 p-2 border-yellow-500  rounded-xl">
            <div className="flex items-center">
              <BiSearchAlt size={26} />
              <h1 className="pl-5 text-lg font-bold">Lands for Lease</h1>
            </div>
            <h1 className="text-xs pl-4">All Area Sizes</h1>
            <div className="flex my-1 items-center">
              <MdOutlineMyLocation size={26} />
              <h1 className="pl-5">Islamabad</h1>
            </div>
            <div className="flex items-center">
              <MdPlace size={26} />
              <h1 className="pl-5">Any Place</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-3 md:px-4 lg:px-7">
        <h1 className="mt-5 mb-2 text-xl font-extrabold">TITANIUM AGENCIES</h1>
        <div className="flex items-center">
          <img
            src={agency}
            alt=""
            className="bg-black w-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 mx-5 xl:mx-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 ml-5 xl:mx-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
        </div>
        <h1 className="mt-5 mb-2 text-xl font-extrabold">FEATURED AGENCIES</h1>
        <div className="flex items-center">
          <img
            src={agency}
            alt=""
            className="bg-black w-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 mx-5 xl:mx-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
          <img
            src={agency}
            alt=""
            className="bg-black w-12 ml-5 xl:mx-12 lg:w-16 px-1.5 py-1 rounded-full"
          />
        </div>
        <h1 className="mt-5 mb-2 text-xl font-extrabold">
          ASSET BUILDER SOCIAL
        </h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={siren} alt="" className="w-12 md:w-16" />
            <h1 className="text-xl pb-3 font-bold">News</h1>
          </div>
          <h1 className="text-blue-600 px-8 pb-3 text-xl">View all</h1>
          <div className="flex items-center">
            <img src={chat} alt="" className=" w-8 md:w-12" />
            <h1 className="text-xl pl-4 pb-3 font-bold">Blogs</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="border-2 border-yellow-600">
            <div className="flex flex-col justify-between p-2">
              <h1 className="text-blue-600">ASSET Builder 10% off for Plot</h1>
              <h1 className="text-blue-600 pt-3">
                ASSET Builder 10% off for Plot
              </h1>
            </div>
          </div>
          <div>
            <img src={house} alt="" />
            <h1 className="capitalize text-xs font-semibold">
              bedian oasis - picturesque blend of luxury living & tranquility
            </h1>
          </div>
          <div>
            <img src={house} alt="" />
            <h1 className="capitalize text-xs font-semibold">
              bedian oasis - picturesque blend of luxury living & tranquility
            </h1>
          </div>

          <div className="absolute right-6 pt-12">
            <div className="flex items-center flex-col">
              <BsFillChatDotsFill size={34} className="text-yellow-500" />
              <h1 className="bg-yellow-500 mt-1 rounded-xl text-xs p-1 font-bold">
                Reach us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Chart/>
    </div>
  );
};

export default RecentSearches;
