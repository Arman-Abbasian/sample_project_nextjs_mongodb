import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import ShowErrorsForm from "../../components/showErrorsForm";
import { useRouter } from "next/router";

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
            localStorage.setItem("todoToken",res.data.data.token)
            push("/todos")
          })
          .catch(err=>{
            setFormErrors(err.response.data?.error?.returnedErrors || []);
            setDbError(err.response.data.message)
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
        <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3">
        <h1 className='text-3xl mb-3 text-center'>Login</h1>
        <div className="flex flex-col gap-2 mb-8">
            {formErrors.map((item,index)=>{
              return <ShowErrorsForm key={index} fieldName={item.fieldName} message={item.message} />
            })}
        </div>
          <div className='mb-4'>
            <label for="mobile">Mobile</label>
            <input type="text" name="mobile" id="mobile"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.mobile && formik.errors.mobile ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} />
            {formik.touched.mobile && formik.errors.mobile && (
              <span className='text-red-400'>{formik.errors.mobile}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="password">Password</label>
            <input type="text" name="password" id="password"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password && (
              <span className='text-red-400'>{formik.errors.password}</span>
            )}
          </div>
          <p className="text-red-600 mb-2 text-center">{dbError}</p>
          <div className='text-center'>
            <input type="submit" value="login" className='bg-blue-500 rounded p-3 text-white' />
          </div>
        </form>
      </div>
    )
  }