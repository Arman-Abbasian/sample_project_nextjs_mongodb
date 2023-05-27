import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Register() {
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
          .then(res=>console.log(res.data))
          .catch(err=>console.log(err.response.data))
        },
        validationSchema: Yup.object({
            name: Yup.string().required("please enter the Name")
            .min(3, 'Name cannot be less than 3 characters').max(20, 'Name cannot be more than 20 characters'),
            email: Yup.string().email("email format is not true").required("please enter the email")
            .max(30,"email cannot be more than 60 characters"),
            mobile: Yup.string().required("please enter the mobile")
            .matches(/9[0-9]{9}/ig,"mobile is wrong"),
            password: Yup.string().required("please enter the password")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Minimum eight characters, at least one letter and one number"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password confirm is no match with password')
          })
      })

    return (
        <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3">
        <h1 className='text-3xl mb-3 text-center'>Register</h1>
          <div className='mb-4'>
            <label for="name">Full Name</label>
            <input type="text" name="name" id="name" 
              className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            {formik.touched.name && formik.errors.name && (
              <span className='text-red-400'>{formik.errors.name}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="email">Email</label>
            <input type="email" name="email" id="email"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
              <span className='text-red-400'>{formik.errors.email}</span>
            )}
          </div>
          <div className='mb-4'>
            <label for="mobile">Mobile</label>
            <input type="number" name="mobile" id="mobile"
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
          <div className='mb-4'>
            <label for="confirmPassword">Confirm confirmPassword</label>
            <input type="text" name="confirmPassword" id="confirmPassword"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className='text-red-400'>{formik.errors.confirmPassword}</span>
            )}
          </div>
          <div className='text-center'>
            <input type="submit" value="register" className='bg-blue-500 rounded p-3 text-white' />
          </div>
        </form>
      </div>
    )
  }