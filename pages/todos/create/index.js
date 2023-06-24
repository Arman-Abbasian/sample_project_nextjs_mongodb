import axios from "axios";
import { getCookie } from "cookies-next";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import { useEffect, useState } from "react";
import User from '../../../models/user.model.js'
import toast, { Toaster } from 'react-hot-toast';
import FormComponent from "../../../components/FormComponent";
 
'useclient'
const CraeteTodo = ({findedUser}) => {
    const user=JSON.parse(findedUser);
    const id=user._id;
    const [formData,setFormData]=useState({todoName:"",todoDate:""});
  console.log(formData)
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setFormData({...formData,todoDate:new Date(formData.todoDate).getTime()})
        axios.post("/api/todos/staticTodos",{...formData,id})
        .then(res=>{
          setFormData({todoName:"",todoDate:""});
          toast.success(res.data.message)
        })
        .catch(err=>console.log(err))
    }
    return ( 
        <div>
            <div className="container mx-auto max-w-md">
                <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                  <FormComponent label={"todo name"} name={"todoName"} onChange={changeHandler} value={formData.todoName}/>
                  <FormComponent label={"todo date"} name={"todoDate"} onChange={changeHandler} value={formData.todoDate} type="date"/> 
                    <input type="submit" value="Add" className="bg-blue-500"/>
                    <Toaster />
                </form>
            </div>
        </div>
     );
}
 
export default CraeteTodo;
export async function getServerSideProps({ req, res }) {
    const token=getCookie('todoToken',{ req, res });
    if(!token){
      return {
        redirect: {
          permanent: false,
          destination: "/users/login",
        },
        props:{},
      };
    }
    const [bearer,main]=token.split(" ");
    const payload=jwt.verify(main,process.env.SECRET_KEY);
    const {mobile,email}=payload;
    //connect to DB
    await dbConnect();
    //search the user based on mobile and email
    const user=await User.findOne({mobile})
          // if mobile number is not found
          if(!user){
            return {
              redirect: {
                permanent: false,
                destination: "/users/login",
              },
              props:{},
            };
          }
          //2- check if the userEmail in DB match with the email in token
          const compareResult=(user.email===email)
         if(!compareResult){
          return {
            redirect: {
              permanent: false,
              destination: "/users/login",
            },
            props:{},
          };
         }
           //3- set the token to the header and redirect to the main page
          const findedUser= JSON.stringify(user)
        return { props: {findedUser} };
      }