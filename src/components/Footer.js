import React from "react";
import { ImLocation } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaYahoo,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-slate-800">
      {/* Four Section Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 py-8">
        {/* Section 1  */}
        <div>
          <h1 className="text-xl pb-2 font-semibold text-yellow-700">
            COMPANY
          </h1>
          <p className="text-amber-200">About Us</p>
          <p className="text-amber-200 py-1">Contact Us</p>
          <p className="text-amber-200">Privacy Policy</p>
          <p className="text-amber-200 py-1">Help & Support</p>
          <p className="text-amber-200">Advertise on ASSET BUILDER</p>
        </div>
        {/* Section 2 */}
        <div>
          <h1 className="text-xl pb-2 font-semibold text-yellow-700">
            CONNECT
          </h1>
          <p className="text-amber-200">Blog</p>
          <p className="text-amber-200 py-1">News</p>
          <p className="text-amber-200">Forum</p>
          <p className="text-amber-200 py-1">Expo</p>
          <p className="text-amber-200">Real Estate Agents</p>
          <p className="text-amber-200 pt-1">Add Property</p>
        </div>
        {/* Section 3 */}
        <div>
          <h1 className="text-xl pb-2 font-semibold text-yellow-700">
            HEAD OFFICE
          </h1>
          <div className="flex items-center">
            <ImLocation size={20} className="text-red-700" />
            <p className="text-amber-200 pl-2">A45-Admin Block Islamabad</p>
          </div>
          <div className="flex py-2 items-center">
            <MdPhone size={20} className="text-green-600" />
            <p className="text-amber-200 pl-2">(+92) 42xxxxxxxxx</p>
          </div>
          <div className="flex items-center">
            <AiOutlineMail size={20} className="text-orange-600" />
            <p className="text-amber-200 pl-2">ab@gmail.com</p>
          </div>
        </div>
        {/* Section 4 */}
        <div>
          <h1 className="text-xl pb-2 font-semibold text-yellow-700">
            GET CONNECTED
          </h1>

          <div className="flex pt-3">
            <div className="bg-gradient-to-r rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaFacebookF size={24} />
            </div>
            <div className="bg-gradient-to-r mx-7 rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaInstagram size={24} />
            </div>
            <div className="bg-gradient-to-r sm:flex hidden rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaYoutube size={24} />
            </div>
          </div>
          <div className="flex pt-7">
            <div className="bg-gradient-to-r rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaTwitter size={24} />
            </div>
            <div className="bg-gradient-to-r mx-7 rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaYahoo size={24} />
            </div>
            <div className="bg-gradient-to-r sm:flex hidden rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaPinterest size={24} />
            </div>

          </div>
          <div className="flex pt-7 sm:hidden">
          <div className="bg-gradient-to-r rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaYoutube size={24} />
            </div>
            <div className="bg-gradient-to-r mx-7 rounded-md from-yellow-300 via-yellow-500 p-1.5 to-yellow-700 w-min">
              <FaPinterest size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
