import React from "react";
import { useFormik } from "formik";
import { QuerySchema } from "../schemas";

const Query = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: QuerySchema,
      onSubmit: () => {},
    });
  // console.log(values);
  // console.log(errors);

  return (
    <div className="pt-4 w-full  h-full flex flex-col items-center justify-center">
      <div className="w-3/5 font-medium">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <p>
          It uses a dictionary of over 200 Latin words, combined with a handful
          of model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour,
        </p>
      </div>
      <div>
        <h1 className=" text-center py-6 uppercase text-2xl font-extrabold">
          ask us anything
        </h1>
        <div className=" h-full pb-4">
          <form onSubmit={handleSubmit}>
            <div className="border-2 my-3 border-yellow-500 pb-2 pl-1">
              <label className="font-bold" htmlFor="name">
                NAME
              </label>
              <input
                type="text"
                autoComplete="off"
                id="name"
                name="name"
                className="ml-2 focus:outline-none outline-none "
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-600">{errors.name}</p>
              ) : null}{" "}
              {/* <input type="radio" name="" value=""/> */}
            </div>
            <div className="border-2 my-3 border-yellow-500 pb-2 pl-1">
              <label className="font-bold" htmlFor="name">
                Email
              </label>
              <input
                type="text"
                name="email"
                autoComplete="off"
                id="email"
                className=" ml-2 focus:outline-none outline-none "
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="border-2 my-3 border-yellow-500 pl-1">
              <label className="font-bold" htmlFor="name">
                Phone
              </label>
              <input
                type="text"
                name="name"
                readOnly
                disabled
                className=" ml-2 focus:outline-none outline-none "
              />
            </div>
            <div className="border-2 my-3 border-yellow-500 py-1 pl-1">
              <label className="font-bold" htmlFor="name">
                +92
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="off"
                className=" ml-2 focus:outline-none outline-none "
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p className="text-red-600">{errors.phone}</p>
              ) : null}
            </div>
            <div className="border-2 my-3 border-yellow-500 py-1 pl-1">
              <label className="font-bold" htmlFor="name">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                autoComplete="off"
                id="subject"
                className=" ml-2 focus:outline-none outline-none "
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject ? (
                <p className="text-red-600">{errors.subject}</p>
              ) : null}
            </div>
            <div className="border-2 flex flex-col my-3 border-yellow-500 py-1 pl-1">
              <div className="flex">
                <label className="font-bold" htmlFor="name">
                  Message
                </label>
                <textarea
                  className="outline-none focus:outline-none ml-2"
                  rows="3"
                  autoComplete="off"
                  id="message"
                  name="message"
                  cols="30"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              {errors.message && touched.message ? (
                <p className="text-red-600">{errors.message}</p>
              ) : null}
            </div>
            <div className="border-2 my-3 flex flex-col border-yellow-500 py-1 pl-1">
              <label className="font-bold" htmlFor="name">
                Security Code
              </label>
              <div className="flex ">
                <input
                  type="text"
                  name="name"
                  className="ml-2 focus:outline-none border-2 my-2 border-yellow-500 w-3/5 outline-none "
                />
                <div className=" cursor-pointer flex items-center justify-center bg-slate-100 mr-2 px-2 mt-2 ml-5 border-black/40 h-min">
                  <h1 className="pr-2  font-semibold">Verify</h1>
                  <button type="capatcha">
                    <input type="checkbox" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="w-full font-bold border-2 border-yellow-500"
                type="text"
              >
                Send E-Mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Query;
