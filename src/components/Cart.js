import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  clearCart,
  decreaseItem,
  removeCart,
} from "../features/cart/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearCarthandle = (cart) => {
    dispatch(clearCart(cart));
  };
  const handleRemoveCart = (cartItem) => {
    dispatch(removeCart(cartItem));
  };
  const handleDecreaseItem = (cartItem) => {
    dispatch(decreaseItem(cartItem));
  };
  const handleIncreaseItem = (cartItem) => {
    dispatch(addCart(cartItem));
  };
  return (
    <div className="w-full flex flex-col items-center h-full ">
      <h1 className="text-center py-5 text-3xl font-bold">Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className="w-full h-[23vh]">
          <h1 className="text-center">Your Cart is Empty</h1>
        </div>
      ) : (
        <div className=" hidden md:block w-4/5">
          <div className="">
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="grid my-2 border-2 rounded-md  p-2 border-gray-400 grid-cols-1 gap-3"
              >
                <div className="grid grid-cols-6 gap-2">
                  <h1 className="font-semibold ">Product</h1>
                  <h1 className="font-semibold pl-4">Name</h1>
                  <h1 className="font-semibold">Price</h1>
                  <h1 className="font-semibold">Marla</h1>
                  <h1 className="font-semibold">Type</h1>
                  <h1 className="font-semibold">Beds</h1>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  <img src={cartItem.src} alt="" />
                  <h1 className="pl-4">{cartItem.name}</h1>
                  <h1>{cartItem.price}</h1>
                  <h1>{cartItem.beds}</h1>
                  <h1>{cartItem.type}</h1>
                  <h1>{cartItem.marla}</h1>
                </div>
                <div className="grid grid-cols-6">
                  <button
                    onClick={() => handleRemoveCart(cartItem)}
                    type="remove"
                  >
                    Remove
                  </button>
                  <div className="flex items-center ml-5 justify-center gap-10 text-lg font-medium rounded-xl bg-slate-400 p-1">
                    <button onClick={() => handleDecreaseItem(cartItem)}>
                      -
                    </button>
                    <h1>{cartItem.quantity}</h1>
                    <button onClick={() => handleIncreaseItem(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="flex gap-4 items-center justify-center ml-4">
                    <h1 className="font-bold">Subtotal : $</h1>
                    <h1>{cartItem.price * cartItem.quantity}</h1>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button onClick={() => clearCarthandle(cart)} type="">
                Clear
              </button>
            </div>
          </div>
          <div>
            <h1>Total:{cart.totalAmount}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
