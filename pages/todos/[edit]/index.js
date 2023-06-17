import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import User from '../../../models/user.model'
import Todo from '../../../models/todo.model'
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { inputDateFormat } from "../../../utils/inputDate.Format";

const EditTodo = ({findedTodo}) => {
    const todo=JSON.parse(findedTodo);
    const id=findedTodo._id;
   const newDateFormat= inputDateFormat(todo.todoDate)
    const [formData,setFormData]=useState({todoName:todo.todoName,todoDate:newDateFormat});
    console.log(formData)
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put("/api/todos/staticTodos",{...formData,id})
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
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoName">todo name</label>
                    <input type="text" name="todoName" id="todoName" className="form-input" onChange={changeHandler} value={formData.todoName} />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoDate">todo date</label>
                    <input type="date" name="todoDate" id="todoDate" className="form-input" onChange={changeHandler} value={formData.todoDate} />
                    </div>
                    <input type="submit" value="Add" className="bg-blue-500"/>
                    <Toaster />
                </form>
            </div>
        </div>
     );
}
 
export default EditTodo;
export async function getServerSideProps({ req, res,query }) {
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
           const _id=user._id
           console.log(query.edit)
           const todo=await Todo.findOne({userID:_id,_id:query.edit});
          const findedTodo= JSON.stringify(todo)
        return { props: {findedTodo} };
      }