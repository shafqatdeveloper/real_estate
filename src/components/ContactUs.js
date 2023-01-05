import React from "react";
import Query from "./Query";

const ContactUs = () => {
  return (
    <div>
      <div className="w-full py-8 flex flex-col items-center justify-center h-full bg-slate-700">
      <div className="w-3/5 flex flex-col items-center text-white">
        <h1 className="text-3xl font-bold ">TELEPHONE</h1>
        <p className="py-5 text-gray-300">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum..
        </p>
        <h1 className="text-xl">Pakistan</h1>
        <div>
          <p className="text-gray-300">0700-Asset Builder (78643)</p>
          <p className="text-gray-300">(+92) 42xxxxxxxx(24 Hrs)</p>
        </div>
        <h1 className="text-3xl font-bold pt-16">OFFICES</h1>
        <p className="py-2 text-gray-300">
          If you need any of the advice fell free to reach us at any of the
          giver addresses :
        </p>
        <div>
          <p className="text-gray-300">38-Multan Road</p>
          <p className="text-gray-300 uppercase font-bold">Lahore</p>
        </div>
        <div className="py-3">
          <p className="text-gray-300 ">A45-Admin Block</p>
          <p className="text-gray-300 font-bold uppercase">Islamabad</p>
        </div>
      </div>
    </div>
    <Query/>
    </div>
  );
};

export default ContactUs;
