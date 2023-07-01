import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import ShowErrorsForm from "../../components/showErrorsForm";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import FormikComponent from "../../components/FormikComponent";
import Link from "next/link";

export default function Register() {
  const {push}=useRouter();
  const [formErrors,setFormErrors]=useState([])
  const [dbError,setDbError]=useState("")
    const formik = useFormik({
        initialValues: {
          mobile: '',
          password:''
        },
        onSubmit: function (values) {
          axios.post ('/api/users/login',values)
          .then(res=>{
            // localStorage.setItem("todoToken",res.data.data.token)
            console.log(res.data.data.token)
            setCookie('todoToken', res.data.data.token);
            push("/todos")
          })
          .catch(err=>{
            setFormErrors(err.response?.data?.error?.returnedErrors || []);
            setDbError(err.response?.data?.message || [])
          })
        },
        validationSchema: Yup.object({
            mobile: Yup.string().required("please enter the mobile")
            .matches(/09[0-9]{9}/ig,"mobile is wrong"),
            password: Yup.string().required("please enter the password")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Minimum eight characters, at least one letter and one number"),
          })
      })

    return (
        <div className="container mx-auto max-w-md">
          <Link href='/users/register' legacyBehavior><a className="text-teal-500 hover:text-teal-800">register ?</a></Link>
          <h1 className='text-3xl mb-3 text-center text-teal-800 mt-10'>Login</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <FormikComponent label={"mobile"} name={"mobile"}formik={formik}  />
        <FormikComponent label={"password"} name={"password"}formik={formik}  />
            <input type="submit" value="login" className={`bg-teal-500 rounded p-3 w-full mt-10 text-white ${formik.isValid?'cursor-pointer':'cursor-not-allowed'}`} disabled={!formik.isValid} />
        </form>
      </div>
    )
  }