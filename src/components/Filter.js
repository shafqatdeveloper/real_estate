import React, { useState } from "react";
import Convertor from "./Convertor";
import { filter_data } from "./Data";
import FilterCard from "./FilterCard";

const Filter = () => {
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [query3, setQuery3] = useState("");
  const Data = filter_data;
  // console.log(Data.filter((item)=>item.name.toLocaleLowerCase().includes(query)))
  const search = (data) => {
    return query1 === ""
      ? data.filter(
          (item) =>
            item.type.includes(query) &&
            item.marla.includes(query2) &&
            item.beds.includes(query3)
        )
      : data.filter(
          (item) =>
            item.type.toLowerCase().includes(query) &&
            item.price <= query1 &&
            item.marla.includes(query2) &&
            item.beds.includes(query3)
        );
  };

  return (
    <div className="w-full my-1 h-full">
      <div className=" flex flex-col justify-center py-4 bg-black/80 h-full">
        <form className="flex justify-between  ">
          <div className="border-2 flex flex-col pl-1 rounded-md font-sans text-white pr-2 py-2 border-yellow-700">
            <label htmlFor="type" className="font-bold pb-2 text-xs">
              Property Type
            </label>
            <select
              onChange={(e) => setQuery(e.target.value)}
              name="type"
              className="pr-10 focus:outline-none bg-transparent"
            >
              <option className="bg-yellow-700 text-black py-2" value="">
                All
              </option>
              <option className="bg-yellow-700 text-black py-2" value="House">
                House
              </option>
              <option className="bg-yellow-700 text-black py-2" value="Banglo">
                Banglo
              </option>
            </select>
          </div>
          <div className="border-2 w-min font-sans rounded-md text-white mr-5 py-2 border-yellow-700">
            <input
              placeholder="Price"
              onChange={(e) => setQuery1(e.target.value)}
              type="number"
              value={query1}
              className="bg-transparent  focus:outline-none w-32"
              name="price"
            />
          </div>
          <div className="border-2 hidden md:flex flex-col pl-1 font-sans rounded-md text-white pr-2 py-2 border-yellow-700">
            <label htmlFor="marla" className="font-bold pb-2 text-xs">
              Area (MARLA)
            </label>
            <select
              name="marla"
              onChange={(e) => setQuery2(e.target.value)}
              className="pr-10 focus:outline-none px-12 bg-transparent"
            >
              <option className="bg-yellow-700 text-black py-2" value="">
                All
              </option>
              <option className="bg-yellow-700 text-black py-2" value="3">
                3
              </option>
              <option className="bg-yellow-700 text-black py-2" value="5">
                5
              </option>
              <option className="bg-yellow-700 text-black py-2" value="6">
                6
              </option>
              <option className="bg-yellow-700 text-black py-2" value="7">
                7
              </option>
              <option className="bg-yellow-700 text-black py-2" value="8">
                8
              </option>
              <option className="bg-yellow-700 text-black py-2" value="12">
                12
              </option>
            </select>
          </div>
          <div className="border-2 pl-1 md:flex flex-col font-sans hidden ml-10 rounded-md text-white pr-2 py-2 border-yellow-700">
            <label htmlFor="beds" className="font-bold pb-2 text-xs">
              Beds
            </label>
            <select
              name="beds"
              onChange={(e) => setQuery3(e.target.value)}
              className="pr-10 px-12 focus:outline-none bg-transparent"
            >
              <option className="bg-yellow-700 text-black py-2" value="">
                All
              </option>
              <option className="bg-yellow-700 text-black py-2" value="3">
                3
              </option>
              <option className="bg-yellow-700 text-black py-2" value="5">
                5
              </option>
              <option className="bg-yellow-700 text-black py-2" value="6">
                6
              </option>
              <option className="bg-yellow-700 text-black py-2" value="7">
                7
              </option>
              <option className="bg-yellow-700 text-black py-2" value="8">
                8
              </option>
            </select>
          </div>
        </form>
        <form className="flex  justify-between pt-5">
          <div className="border-2 flex flex-col md:hidden pl-1 rounded-md text-white pr-2 py-2 border-yellow-700">
            <label htmlFor="marla" className="font-bold pb-2 text-xs">
              Area (MARLA)
            </label>
            <select
              name="marla"
              onChange={(e) => setQuery2(e.target.value)}
              className="pr-10 focus:outline-none bg-transparent"
            >
              <option className="bg-yellow-700 text-black py-2" value="">
                All
              </option>
              <option className="bg-yellow-700 text-black py-2" value="">
                3
              </option>
              <option className="bg-yellow-700 text-black py-2" value="5">
                5
              </option>
              <option className="bg-yellow-700 text-black py-2" value="6">
                6
              </option>
              <option className="bg-yellow-700 text-black py-2" value="7">
                7
              </option>
              <option className="bg-yellow-700 text-black py-2" value="8">
                8
              </option>
              <option className="bg-yellow-700 text-black py-2" value="12">
                12
              </option>
            </select>
          </div>
          <div className="border-2 flex-col flex md:hidden pl-1 rounded-md text-white pr-2 py-2 border-yellow-700">
            <label htmlFor="beds" className="font-bold pb-2 text-xs">
              BEDS
            </label>
            <select
              name="beds"
              onChange={(e) => setQuery3(e.target.value)}
              className="pr-10 focus:outline-none bg-transparent"
            >
              <option className="bg-yellow-700 text-black py-2" value="">
                ALL
              </option>
              <option className="bg-yellow-700 text-black py-2" value="3">
                3
              </option>
              <option className="bg-yellow-700 text-black py-2" value="5">
                5
              </option>
              <option className="bg-yellow-700 text-black py-2" value="6">
                6
              </option>
              <option className="bg-yellow-700 text-black py-2" value="7">
                7
              </option>
              <option className="bg-yellow-700 text-black py-2" value="8">
                8
              </option>
            </select>
          </div>
        </form>
      </div>
      <FilterCard data={search(Data)} />
      <Convertor />
    </div>
  );
};

export default Filter;
