import * as Yup from "yup";
export const QuerySchema = Yup.object({
  name: Yup.string().min(4).max(18).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your E-Mail"),
  phone: Yup.string()
    .min(11)
    .max(11)
    .required("Please Enter Your Phone Number"),
  subject: Yup.string().min(4).max(30).required("Please Specify The Subject"),
  message: Yup.string().min(10).max(100).required("Please Enter Your Message"),
});
export const SigninSchema = Yup.object({
  email:Yup.string().email().required("Please Enter Your E-Mail"),
  password:Yup.string().min(8).max(20).required("Please Enter Your Name"),
})