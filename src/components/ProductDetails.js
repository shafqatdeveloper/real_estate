import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../features/cart/CartSlice";
import { products_data } from "./Data";

const ProductDetails = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (product)=>{
    dispatch(addCart(product))
  }

  const { id } = useParams();
  console.log(id);
  const data = products_data;
  return (
    <div className="w-full flex flex-col items-center h-full">
      <div className="w-[90%] sm:w-4/5 md:w-3/5">
        {data
          .filter((item) => item.id === id)
          .map((item) => (
            <div
              key={item.id}
              className="grid items-center justify-center gap-6 my-6 grid-cols-1 md:grid-cols-2"
            >
              <div>
                <img src={item.src} alt="" />
              </div>
              <div>
                <h1>
                  <span className="text-lg font-bold font-sans">Name:</span>{" "}
                  {item.name}
                </h1>
                <h1>
                  <span className="text-lg font-bold py-2 font-sans">
                    Price : </span>
                  {item.price}
                </h1>
                <h1>
                  <span className="text-lg font-bold font-sans">type : </span>
                  {item.type}
                </h1>
                <h1>
                  <span className="text-lg font-bold py-2 font-sans">
                    Beds : </span>
                  {item.beds}
                </h1>
                <h1>
                  <span className="text-lg font-bold font-sans">Marla : </span>
                  {item.marla}
                </h1>
              </div>
       <div className="flex items-center w-full justify-center">
       <button
       onClick={()=>handleAddToCart(item)}
          className="bg-purple-700  px-14 my-5 mt-3 text-white font-bold font-sans py-2 rounded-xl"
          type="back"
        >
          Add To Cart
        </button>
       </div>
            </div>
          ))}

      </div>
      <div>
        <Link to="/">
          <button
            className="bg-amber-700 w-full px-14 my-5 mt-3 text-white font-bold font-sans py-2 rounded-xl"
            type="back"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
