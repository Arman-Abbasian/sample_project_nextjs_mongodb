import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../lib/mongodb";
import User from '../../models/user.model.js'
import Todo from '../../models/todo.model'
import { useState } from "react";
import Todoo from "../../components/Todo";

const Todos = ({userTodos}) => {
  const [todos,setTodos]=useState({data:JSON.parse(userTodos),loading:false,error:null})
  const render=()=>{
    if(todos.loading) return <p>loading</p>
    if(todos.data.length===0) return <p>no todo</p>
    todos.data.map(item=>(
       <p key={item._id}>{item.todoName}</p>
    ))
  }
  const remainedTime=(todoDate)=>{
    const remainedDay=(todoDate-Date.now())/864000000;
    if(remainedDay<0) return "expired";
    const day=Math.round(remainedDay)
    const hour=Math.floor((remainedDay % 1)*24)
    return `${day} day & ${hour} hour to do`
  }
    return ( 
        <div className="flex flex-col gap-2">
            <Link href={"/todos/create"} legacyBehavior ><a>add new todo</a></Link>
        <div>todo list</div>
        {
        (todos.loading) ? <p>loading</p> :
    (todos.data.length===0) ? <p>no todo</p> :
    <div className="flex flex-col gap-3 w-full">
    {todos.data.map(item=>(
       <Todoo key={item._id} todoName={item.todoName} remainedTime={remainedTime(item.todoDate)} completed={item.completed} />
    ))}
    </div>
}
        </div>
     );
}

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
       const _id=user._id
       const todos=await Todo.find({userID:_id});
      const userTodos= JSON.stringify(todos)

    return { props: {userTodos} };
  }
   
export default Todos;