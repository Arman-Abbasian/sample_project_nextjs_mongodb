import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import { useEffect, useState } from "react";
import User from '../../../models/user.model.js'
'useclient'
const CraeteTodo = ({findedUser}) => {
    const user=JSON.parse(findedUser);
    const id=user._id;
    const {push}=useRouter();
    const [formData,setFormData]=useState({todoName:"",todoDate:""});
    useEffect(()=>{
        
        
    },[])
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("/api/todos/staticTodos",{...formData,id})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return ( 
        <div>
            <div className="container mx-auto max-w-md">
                <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoName">todo name</label>
                    <input type="text" name="todoName" id="todoName" className="form-input" onChange={changeHandler} />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoDate">todo date</label>
                    <input type="date" name="todoDate" id="todoDate" className="form-input" onChange={changeHandler} />
                    </div>
                    <input type="submit" value="Add" className="bg-blue-500"/>
                </form>
            </div>
        </div>
     );
}
 
export default CraeteTodo;
export async function getServerSideProps({ req, res }) {
    const token=getCookie('todoToken',{ req, res });
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
                destination: "users/login",
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
              destination: "users/login",
            },
            props:{},
          };
         }
           //3- set the token to the header and redirect to the main page
          const findedUser= JSON.stringify(user)
        return { props: {findedUser} };
      }