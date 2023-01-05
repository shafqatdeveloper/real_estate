import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { SigninSchema } from "../schemas";

const Account = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values,errors, touched, handleBlur, handleSubmit, handleChange } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: SigninSchema,
    }
  );

  return (
    <div className="w-full flex flex-col mt-1 items-center bg-black/90 text-white h-screen">
      <div className="flex flex-col items-center pt-20">
        <button className="flex border-2 border-yellow-700 rounded-full px-12 py-1.5 items-center">
          <BsFacebook className="text-blue-600" size={30} />{" "}
          <h1 className="pl-5 font-bold">Facebook</h1>{" "}
        </button>
        <button className="flex items-center border-2 px-12 rounded-full py-1 border-yellow-700 mt-5">
          <FcGoogle size={33} /> <h1 className="pl-9 font-bold">Google</h1>{" "}
        </button>
      </div>
      <div className=" pt-14">
      <form onSubmit={handleSubmit}>
        <div className={errors.email && touched.password ? 'border-2 border-yellow-700 px-5 py-3 rounded-full' : 'border-2 border-yellow-700 px-5 py-1 rounded-full'}>
            <label className="font-medium" htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="off" className="ml-4 px-5 focus:outline-none outline-none bg-transparent" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && touched.email ? <p className="py-0.5 text-red-500 text-center">{errors.email}</p>:null}
        </div>
        <div className={errors.password && touched.password ? 'border-2 mt-6 border-yellow-700 px-5 py-3 rounded-full ' : 'border-2 mt-6 border-yellow-700 px-5 py-1 rounded-full '}>
            <label className="font-medium" htmlFor="email">Password</label>
        <input type="password" name="password" id="password" autoComplete="off" className="ml-4 px-5 focus:outline-none outline-none bg-transparent" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {errors.password && touched.password ? <p className="py-0.5 text-red-500 text-center">{errors.password}</p>:null}
        </div>
        <div className="flex items-end justify-end ">
        <button className="pt-2 font-bold">Forgot Password?</button>
        </div>
        <div className="text-center pt-8">
        <button className=" border-2 border-yellow-700 px-12 rounded-full py-1.5" type="login">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Account;
