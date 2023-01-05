import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { BiCart, BiSearchAlt2 } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const { loginWithRedirect,user, logout, isAuthenticated } = useAuth0();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* // Desktop Navbar */}
      {nav ? (
        <div className="w-full h-screen bg-black/40 fixed top-0 left-0"></div>
      ) : (
        ""
      )}
      <div className="w-full hidden h-full md:flex flex-col">
        <div className="w-full flex justify-start flex-col py-2 pl-3 h-16 text-yellow-600 bg-indigo-900">
          <Link to="/">
            <img src={logo} className="w-12 cursor-pointer" alt="" />
          </Link>
        </div>
        <div className="flex py-2 w-full items-center justify-between my-1 bg-black/90 text-slate-300">
          <div className="flex ">
            <Link to="/">
              {" "}
              <h1 className="capitalize font-bold text-lg pl-3">Home</h1>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <h1 className="capitalize font-bold text-lg px-8">about</h1>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <h1 className="capitalize font-bold text-lg px-8">
                Contact
              </h1>{" "}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {
              isAuthenticated && <div>
                <h1>{user.nickname}</h1>
              </div>
            }
            {isAuthenticated ? (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            ) : (
              <div className="mr-5">
                <MdAccountCircle
                  className="text-yellow-600 cursor-pointer"
                  size={30}
                  onClick={() => loginWithRedirect()}
                />
              </div>
            )}

            <Link to="/cart">
              {" "}
              <div className="mr-5">
                <div className="relative">
                  <BiCart
                    className="text-yellow-600 cursor-pointer"
                    size={30}
                  />
                  <p className="absolute top-0 right-0 bg-red-700 px-1 text-xs rounded-full font-bold">
                    {cart.cartItems.length}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex py-2 items-center w-full justify-between bg-black/90 text-slate-300">
          <div className="flex ">
            <Link to="/filter">
              {" "}
              <h1 className="capitalize font-bold text-lg pl-3">plots</h1>{" "}
            </Link>
            <Link to="/newprojects">
              {" "}
              <h1 className="capitalize font-bold text-lg px-3">commercial</h1>
            </Link>
            <Link to="/beforeafter">
              {" "}
              <h1 className="capitalize font-bold text-lg px-3">agents</h1>{" "}
            </Link>
            <Link to="/newprojects">
              {" "}
              <h1 className="capitalize font-bold text-lg px-3">
                new projects
              </h1>{" "}
            </Link>
          </div>
          <div className="flex">
            <div className="flex items-center text-black bg-yellow-500 rounded-xl pl-1 pr-1">
              <Link to="/priceindex">
                {" "}
                <h1 className="font-extrabold pr-2">Price Index</h1>
              </Link>
              <BiSearchAlt2 size={20} className="mt-1" />
            </div>
            <Link to="/addproperty">
              <div className="flex items-center mx-3 text-black bg-yellow-500 rounded-xl pl-1 pr-1">
                <h1 className="font-extrabold text-xl pr-2">+</h1>
                <h1 className="font-bold pr-1">Add Property</h1>
              </div>
            </Link>
            <Link to="/privacypolicy">
              <div className="flex items-center mx-3 text-white bg-red-500 px-1 py-0.5 rounded-xl pl-1 pr-1">
                <h1 className="font-bold pr-1">PrivacyPolicy</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="flex flex-col md:hidden">
        <div>
          {nav ? (
            <div className="w-full bg-black/20 fixed left-0 top-0"></div>
          ) : (
            ""
          )}

          <div className="w-full flex justify-between items-center pl-3 h-16 text-yellow-600 bg-indigo-900">
            <div className="flex flex-col items-center">
              <Link to="/">
                {" "}
                <img src={logo} className="w-12" alt="" />{" "}
              </Link>
            </div>
            <div>
              <AiOutlineMenu
                onClick={handleNav}
                className="cursor-pointer mr-4"
                size={27}
              />
            </div>
          </div>
          <div className="flex py-2 w-full justify-between items-center my-1 bg-black/90 text-slate-300">
            <div className="flex ">
              <Link to="/">
                {" "}
                <h1 className="capitalize font-bold text-lg pl-3">Home</h1>{" "}
              </Link>
              <Link to="/about">
                {" "}
                <h1 className="capitalize font-bold text-lg px-10 sm:px-20 ">
                  about
                </h1>
              </Link>
              <Link to="/contact">
                {" "}
                <h1 className="capitalize font-bold text-lg pr-3">
                  Contact
                </h1>{" "}
              </Link>
            </div>
            <Link to="/account">
              {" "}
              <div className="pr-4">
                <MdAccountCircle size={28} className="text-yellow-500" />
              </div>
            </Link>
          </div>
          <div
            className={
              nav
                ? "bg-white w-[250px] h-screen duration-[700ms] transition-all fixed top-0 right-0"
                : "bg-white w-[70px] h-screen fixed duration-[1800ms] transition-all top-0 right-[-100%]"
            }
          >
            <div className="flex flex-col justify-between">
              <div className="px-5 pt-4">
                <Link onClick={handleNav} to="/filter">
                  {" "}
                  <h1 className="uppercase text-xl font-semibold ">
                    Plots
                  </h1>{" "}
                </Link>
                <Link onClick={handleNav} to="/newprojects">
                  {" "}
                  <h1 className="uppercase text-xl font-semibold py-3">
                    Commercial
                  </h1>
                </Link>
                <Link onClick={handleNav} to="/beforeafter">
                  {" "}
                  <h1 className="uppercase text-xl font-semibold ">Agents</h1>
                </Link>
                <Link onClick={handleNav} to="/newprojects">
                  {" "}
                  <h1 className="uppercase text-xl font-semibold pt-3">
                    New Projects
                  </h1>
                </Link>
              </div>
              <div className="absolute right-4 top-4">
                <AiOutlineClose size={28} onClick={handleNav} />
              </div>
              <div className="py-20 px-5">
                <div
                  onClick={handleNav}
                  className="flex items-center mb-5 text-black justify-center bg-yellow-500 rounded-xl pr-1"
                >
                  <Link to="priceindex">
                    {" "}
                    <h1 className="font-extrabold pr-2">Price Index</h1>{" "}
                  </Link>
                </div>
                <Link onClick={handleNav} to="/addproperty">
                  {" "}
                  <div className="flex items-center text-black justify-center bg-yellow-500 rounded-xl pl-1 pr-1">
                    <h1 className="font-extrabold text-xl pr-2">+</h1>
                    <h1 className="font-bold pr-1">Add Property</h1>
                  </div>
                </Link>
                <Link onClick={handleNav} to="/privacypolicy">
                  {" "}
                  <div className="flex items-center mt-5 text-white py-0.5 justify-center bg-red-500 rounded-xl pl-1 pr-1">
                    <h1 className="font-bold pr-1">PrivacyPolicy</h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-5 px-5 w-full">
              <div className="flex items-center justify-between">
                <div className="border-2 mx-3 w-min border-yellow-500 rounded-2xl px-2">
                  <h1 className="font-semibold">Eng</h1>
                </div>
                <div className="pr-4">
                  <FiSettings size={26} className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
