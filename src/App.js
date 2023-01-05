import Account from "./components/Account";
import AboutUs from "./components/AboutUs";
import AddProperty from "./components/AddProperty";
import BeforeAfter from "./components/BeforeAfter";
import ContactUs from "./components/ContactUs";
import Convertor from "./components/Convertor";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecentSearches from "./components/RecentSearches";
import LoanCalculator from "./components/LoanCalculator";
import NewProjects from "./components/NewProjects";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./Hero";
import Privacy from "./Privacy";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateToatls } from "./features/cart/CartSlice";

function App() {
  const {cartItems} = useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateToatls())
  },[cartItems])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/convertor" element={<Convertor />} />
        <Route path="/newprojects" element={<NewProjects />} />
        <Route path="/loancalculator" element={<LoanCalculator />} />
        <Route path="/beforeafter" element={<BeforeAfter />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/priceindex" element={<RecentSearches />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/details/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
