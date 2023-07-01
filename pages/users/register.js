import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import ShowErrorsForm from "../../components/showErrorsForm";
import { useRouter } from "next/router";
import FormikComponent from "../../components/FormikComponent";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Register() {
  const {push}=useRouter();
  const [formErrors,setFormErrors]=useState([])
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          mobile: '',
          password:'',
          confirmPassword:''
        },
        onSubmit: function (values) {
          axios.post ('/api/users/register',values)
          .then(res=>{
            toast.success("registered successfully")
            push("/users/login")
          })
          .catch(err=>setFormErrors(err.response.data.error.returnedErrors))
        },
        validationSchema: Yup.object({
            name: Yup.string().required("please enter the Name")
            .min(3, 'Name cannot be less than 3 characters').max(20, 'Name cannot be more than 20 characters'),
            email: Yup.string().email("email format is not true").required("please enter the email")
            .max(30,"email cannot be more than 60 characters"),
            mobile: Yup.string().required("please enter the mobile")
            .matches(/09[0-9]{9}/ig,"mobile is wrong"),
            password: Yup.string().required("please enter the password")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Minimum eight characters, at least one letter and one number"),
            confirmPassword: Yup.string().required("please enter the confirm password")
            .oneOf([Yup.ref('password'), null], 'Password confirm is no match with password')
          })
      })
console.log(formik.isValid)
    return (
        <div className="container mx-auto max-w-md">
          <Link href='/users/login' legacyBehavior><a className="text-teal-500 hover:text-teal-800">login ?</a></Link>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <h1 className='text-3xl mb-3 text-center text-teal-800 mt-10'>Register</h1>
        <div className="flex flex-col gap-2 mb-8">
            {formErrors.map((item,index)=>{
              return <ShowErrorsForm key={index} fieldName={item.fieldName} message={item.message} />
            })}
        </div>
        <FormikComponent label={"Full Name"} name={"name"}formik={formik}  />
        <FormikComponent label={"Email"} name={"email"}formik={formik}  />
        <FormikComponent label={"mobile"} name={"mobile"}formik={formik}  />
        <FormikComponent label={"password"} name={"password"}formik={formik}  />
        <FormikComponent label={"confirm Password"} name={"confirmPassword"}formik={formik}  />   
        <input type="submit" value="register" className={`bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid?'cursor-pointer':'cursor-not-allowed'}`} disabled={!formik.isValid} />
        </form>
      </div>
    )
  }
