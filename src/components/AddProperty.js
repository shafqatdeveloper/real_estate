import React from "react";

const AddProperty = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full px-7 h-[100px]">
        <h1 className="capitalize font-bold text-xl">add a property</h1>
        <h1 className="capitalize font-bold text-xl"> = required field</h1>
      </div>

      <div className="bg-black text-white py-2 font-bold">
        <h1 className="pl-5 font-signature">PROPERTY TYPE AND LOCATION</h1>
      </div>
      {/* Property Type and Location */}
      <div className="pt-8 flex flex-col items-center justify-center">
        <div className="w-2/4">
          <form>
            {/* Purpose */}
            <div className="flex items-center  flex-col lg:flex-row">
              <label
                className="font-bold md:pr-3 lg:pr-5 xl:pr-7 pb-2 lg:pb-0 lg:pl-[46px]"
                htmlFor="purpose"
              >
                Purpose :{" "}
              </label>
              <div className="flex border-2 border-yellow-600 rounded-lg px-6 ml-5 md:ml-12">
                <input type="radio" defaultChecked className="bg-black mr-1" name="sale" />
                <h1 className="border-r-2 border-yellow-600 pr-10">Sale</h1>
                <input
                  type="radio"
                  className="bg-black mr-1 ml-10"
                  name="sale"
                />
                <h1>Rent</h1>
              </div>
            </div>
            {/* Property Type */}
            <div className="flex mt-5 flex-col lg:flex-row items-center ">
              <label
                className="font-bold lg:pr-5 xl:pr-7 pb-2 lg:pb-0"
                htmlFor="purpose"
              >
                Property Type :{" "}
              </label>
              <div className="flex border-2 border-yellow-600 rounded-lg px-6 lg:ml-12 md:ml-3">
                <input type="radio" defaultChecked className="bg-black mr-1" name="property" />
                <h1 className="border-r-2 border-yellow-600 pr-10">Home</h1>
                <input
                  type="radio"
                  className="bg-black ml-5 mr-1"
                  name="property"
                />
                <h1 className="border-r-2 border-yellow-600 pr-10">Plot</h1>
                <input
                  type="radio"
                  className="bg-black mr-1 ml-2"
                  name="property"
                />
                <h1>Commercial</h1>
              </div>
            </div>
            {/* City */}
            <div className="flex flex-col mt-5 lg:flex-row items-center">
              <label htmlFor="" className="lg:pl-[77px] pb-2 lg:pb-0 font-bold">
                City :{" "}
              </label>
              <div className="md:ml-3 lg:ml-[75px]">
                <select className="focus:outline-none border-2 border-yellow-600 rounded-lg  px-5 pr-7">
                  <option value="">Select City</option>
                  <option value="">Islamabad</option>
                  <option value="">Lahore</option>
                  <option value="">Karachi</option>
                  <option value="">Quetta</option>
                </select>
              </div>
            </div>
            {/* Location */}

            <div className="flex flex-col mt-5 lg:flex-row items-center">
              <label htmlFor="" className="lg:pl-10 font-bold pb-2 lg:pb-0">
                Location :{" "}
              </label>
              <div className="md:ml-3 lg:ml-[75px]">
                <input
                  className="border-2 border-yellow-600 focus:outline-none rounded-lg"
                  type="text"
                  name=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Property Details */}
      <div className="bg-black text-white my-5 py-2 font-bold">
        <h1 className="pl-5">PROPERTY DETAILS</h1>
      </div>
      <div className="py-8 flex flex-col items-center justify-center w-full">
        <div className="lg:w-2/4 ">
          <form>
            <div className="flex items-center flex-col lg:flex-row ">
              <label className=" font-bold pr-5" htmlFor="prop_title">
                Property Title :{" "}
              </label>
              <input
                type="text"
                name=""
                className="lg:ml-14 rounded-lg focus:outline-none border-2 border-yellow-700 "
              />
            </div>
            <div className="flex items-center flex-col mt-5 lg:flex-row ">
              <label className=" font-bold pr-5" htmlFor="prop_title">
                Description :{" "}
              </label>
              <textarea
                rows="2"
                cols="22"
                className="lg:ml-[75px]  lg rounded-lg focus:outline-none border-2 border-yellow-700 "
              ></textarea>
            </div>
            <div className="flex items-center flex-col mt-5 lg:flex-row ">
              <label className=" font-bold" htmlFor="prop_title">
                Price (PKR) :
              </label>
              <input
                type="number"
                name=""
                className="lg:ml-[6rem] rounded-lg focus:outline-none border-2 border-yellow-700 "
              />
            </div>
            <div className="flex items-center flex-col mt-5 lg:flex-row ">
              <label className=" font-bold" htmlFor="prop_title">
                Land Area :{" "}
              </label>
              <input
                type="text"
                name=""
                className="lg:ml-[105px] rounded-lg focus:outline-none border-2 border-yellow-700 "
              />
              <label className="lg:mx-2 font-bold" htmlFor="prop_title">
                Unit :{" "}
              </label>
              <select className="focus:outline-none border-2 border-yellow-600 rounded-lg  px-2">
                <option value="">Square Feet</option>
                <option value="">Square Meter</option>
                <option value="">Marla</option>
                <option value="">Kanal</option>
                <option value="">Acre</option>
              </select>
            </div>
            <div className="flex items-center flex-col mt-5 lg:flex-row ">
              <label className=" font-bold" htmlFor="prop_title">
                Expires After :{" "}
              </label>
              <select className="focus:outline-none border-2 lg:ml-[83px] border-yellow-600 rounded-lg  px-2">
                <option value="">6 Months</option>
                <option value="">1 Year</option>
                <option value="">2 Years</option>
                <option value="">5 Years</option>
                <option value="">No Expiry</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-black text-white my-5 py-2 font-bold">
        <h1 className="pl-5">ADD IMAGE</h1>
      </div>
      <div className="w-full flex justify-center flex-col lg:flex-row items-center h-[170px]">
        <label
          className="bg-black cursor-pointer  rounded-full mb-3 lg:mb-0 px-8 py-2 font-bold text-white "
          htmlFor="image"
        >
          ADD Image
        </label>
        <input
          id="image"
          hidden
          type="file"
          name=""
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 file:text-white"
        />
        <div className="px-2 lg:px-0">
          <div className="lg:ml-28 border-t-2 border-b-2 border-l-2 border-r-2 border-l-lime-700 border-r-yellow-500 border-b-orange-400 px-2 py-1.5 rounded-xl border-t-yellow-700">
            <h1>
              Press CTRL key while slecting images to upload multiple files at
              once
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-black text-white my-5 py-2 font-bold">
        <h1 className="pl-5">MEMBERSHIP</h1>
      </div>

      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <h1 className="text-lg font-bold">Membership Status</h1>
          <div className="flex mt-3 lg:mt-0">
            <input className="ml-5 pr-1" defaultChecked type="radio" name="membership" />
            <label
              htmlFor="existing"
              className="ml-1 mr-[18px] lg:mr-0 font-bold"
            >
              Existing Member
            </label>
          </div>
          <div className="flex">
            <input type="radio" className="ml-5" name="membership" />
            <label htmlFor="existing" className="ml-1 font-bold">
              New Member(Free)
            </label>
          </div>
        </div>

        <form className="my-5">
          <div className="flex items-center flex-col lg:flex-row ">
            <label className=" font-bold pr-5" htmlFor="prop_title">
              Username :{" "}
            </label>
            <input
              type="text"
              name=""
              className="lg:ml-14 mt-1 lg:mt-0 rounded-lg focus:outline-none border-2 border-yellow-700 "
            />
          </div>
          <div className="flex items-center flex-col mt-5 lg:flex-row ">
            <label className=" font-bold pr-5" htmlFor="prop_title">
              Password :
            </label>
            <input
              type="text"
              name=""
              className="lg:ml-[60px] mt-1 lg:mt-0 rounded-lg focus:outline-none border-2 border-yellow-700 "
            />
          </div>
          <button
            className="bg-yellow-500 w-full  py-1 text-white font-extrabold mt-6 rounded-md"
            type=""
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
