import React, { useState } from "react";
import logo from "./assets/logo.png";
import calculator from "./assets/cal.png";
const LoanCalculator = () => {
  const [price1, setPrice1] = useState("100");
  const [price2, setPrice2] = useState("5");
  const [price3, setPrice3] = useState("3");
  return (
    <div className="w-full h-full my-1">
      <div className="w-full h-[290px] md:h-[300px] text-center bg-black">
        <div className="w-full h-full flex  justify-between items-center bg-black/50">
          <div className="text-white font-sans text-start pl-4 md:pl-10 w-3/4 md:w-1/4">
            <img src={logo} alt="" className="w-24" />
            <h1 className="py-3 text-xl font-bold">Home Loan Calculator</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever .
            </p>
          </div>
          <div className="w-full flex items-center justify-center md:w-1/4 h-full rounded-l-full bg-yellow-500">
            <img src={calculator} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-full border-2 my-4 border-orange-500 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <form className="py-5">
            <h1 className="text-2xl">Property Price</h1>
            <div className="flex flex-col">
              <label
                className="pt-3 text-xs border-b-2 border-b-orange-500"
                htmlFor="price"
              >
                <h1>{price1} Rs/-</h1>
              </label>
              <input
                type="range"
                min="100"
                max="50000000"
                value={price1}
                onChange={(e) => setPrice1(e.target.value)}
                className="bg-orange-500 outline-none appearance-none h-2 rounded-full my-2 w-52"
                name="price"
              />
            </div>
          </form>
          <form className="py-7 md:py-0 md:px-10">
            <h1 className="text-2xl">Down Payment</h1>
            <div className="flex flex-col">
              <label
                className="pt-3 text-xs border-b-2 border-b-orange-500"
                htmlFor="price"
              >
                <h1>{price2}%</h1>
              </label>
              <input
                type="range"
                min="5"
                max="100"
                value={price2}
                onChange={(e) => setPrice2(e.target.value)}
                className="bg-orange-500  appearance-none h-2 rounded-full my-2 w-52"
                name="price"
              />
            </div>
          </form>
          <form className="py-5">
            <h1 className="text-2xl">Loan Period</h1>
            <div className="flex flex-col">
              <label
                className="pt-3 text-xs border-b-2 border-b-orange-500"
                htmlFor="price"
              >
                <h1>Months : {price3}</h1>
              </label>
              <input
                onChange={(e) => setPrice3(e.target.value)}
                type="range"
                min="3"
                max="60"
                value={price3}
                className="bg-orange-500  appearance-none h-2 rounded-full my-2 w-52"
                name="price"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center py-3 justify-center">
          <button
            type="calculate"
            className="border-2 px-4 rounded-full text-xl font-bold py-1 border-orange-600"
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="px-5 pb-10">
        <h1 className="py-3 text-3xl font-bold">Banking Partners</h1>
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

      <div className="px-5 pb-5 md:w-3/4">
        <h1 className="mb-2 text-2xl font-bold">About Home Loan Calculator</h1>
        <p className="text-xs">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <p className="text-xs">
          Ipsum is that it has a more-or-less normal distribution of letters, as{" "}
        </p>
        <p className="text-xs">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p className="text-xs">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at it
          over 2000 years old. Richard McClintock, a Latin professor at it over
          2000 years old. Richard McClintock, a Latin professor at{" "}
        </p>
      </div>
    </div>
  );
};

export default LoanCalculator;
