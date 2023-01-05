import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:[],
  quantity:0,
  totalAmount:0
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:
  {
    addCart(state,action){
     const itemIndex =  state.cartItems.findIndex(
        (item)=>item.id===action.payload.id
      )
      if(itemIndex >= 0){
        state.cartItems[itemIndex].quantity += 1
      }
      else{
        const tempProduct = {...action.payload,quantity:1}
        state.cartItems.push(tempProduct)
      }
    },
    decreaseItem(state,action){
      const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
      if(state.cartItems[itemIndex].quantity > 1 ){
        state.cartItems[itemIndex].quantity -= 1
      }
      else if(state.cartItems[itemIndex].quantity ===1){
        const nextItem =  state.cartItems.filter((item)=>item.id !== action.payload.id)
        state.cartItems = nextItem
      }
    },
    removeCart(state,action){
    const nextItem =   state.cartItems.filter((item)=>item.id !== action.payload.id)
    state.cartItems = nextItem;
    },
    clearCart(state){
      state.cartItems = []
    },
    calculateToatls:(state)=>{
      let amount = 0;
      let price = 0;
      state.cartItems.forEach((item)=>{
        amount += item.quantity;
        price += item.quantity * item.price;
      });
      state.quantity = amount
      state.totalAmount = price
    }
  }
})

export const {addCart,decreaseItem,removeCart,clearCart,calculateToatls} = cartSlice.actions

export default cartSlice.reducer

















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   quantity: 0,
//   totalAmount: 0,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].quantity += 1;
//       } else {
//         const tempProduct = { ...action.payload, quantity: 1 };
//         state.cartItems.push(tempProduct);
//       }
//     },
//     decreaseItem(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (state.cartItems[itemIndex].quantity > 1) {
//         state.cartItems[itemIndex].quantity -= 1;
//       } else if (state.cartItems[itemIndex].quantity === 1) {
//         const nextItem = state.cartItems.filter(
//           (cartItem) => cartItem.id !== action.payload.id
//         );

//         state.cartItems = nextItem;
//       }
//     },
//     removeCart(state, action) {
//       const nextItem = state.cartItems.filter(
//         (cartItem) => cartItem.id !== action.payload.id
//       );

//       state.cartItems = nextItem;
//     },
//     clearCart(state) {
//       state.cartItems = [];
//     },

//     calculateToatls: (state) => {
//       let amount = 0;
//       let price = 0;
//       state.cartItems.forEach((item)=>{
//         amount += item.quantity;
//         price += item.quantity * item.price;
//       });
//       state.quantity = amount;
//       state.totalAmount = price
//     },
//   },
// });

// export const { addCart, removeCart, clearCart, decreaseItem, calculateToatls } =
//   cartSlice.actions;
// export default cartSlice.reducer;
