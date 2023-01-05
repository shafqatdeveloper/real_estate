import React from "react";
import masjid from "./assets/masjid.jpg";

const PLA = () => {
  return (
    <div className="w-full pt-2 h-full">
      <div className="w-full flex justify-between items-center h-[300px] bg-black/90">
        <div className="w-[45%] md:w-[30%]">
          <h1 className="text-white pl-4 sm:pl-7 md:pl-10 text-2xl font-bold">
            Punjab Land Record
          </h1>
          <p className="pl-4 sm:pl-7 md:pl-10 pt-5 text-slate-100">
            Get all the details of any property unit in Punjab, scuh as
            transfer, Location and Ownership history
          </p>
        </div>
        <div>
          <img
            src={masjid}
            style={{
              borderTopLeftRadius: "150px",
              borderBottomLeftRadius: "150px",
            }}
            alt=""
            className="md:w-72 object-cover sm:w-52 sm:h-52 w-40 h-40 md:h-[300px]"
          />
        </div>
      </div>

      <div className="w-full my-12 h-full md:h-[271px]">
        <div className="grid border-yellow-600 rounded-3xl border-2 grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 flex items-center justify-center">
            <img src={masjid} alt="" className="w-3/5 h-full" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold py-10">
              Punjab Lands Record Authority
            </h1>
            <button className="border-2 mb-5 border-yellow-600 rounded-full px-3 py-1">
              Punjab Land Board
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full pt-5 pb-16">
        <div className="w-[70%] pl-5">
          <h1 className="text-3xl pb-12 font-bold">About Punjab Land Record</h1>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock,
          </p>
          <p className="py-3">
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at.
          </p>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
          <p className="py-3">
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature.
          </p>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PLA;
