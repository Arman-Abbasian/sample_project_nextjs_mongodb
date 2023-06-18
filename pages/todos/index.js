import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../lib/mongodb";
import User from '../../models/user.model.js'
import Todo from '../../models/todo.model'
import { useState } from "react";
import Todoo from "../../components/Todo";
import TodoFilter from "../../components/TodosHeader/TodosFilter";
import axios from "axios";
import { toast } from "react-hot-toast";

const Todos = ({userTodos}) => {
  const [todos,setTodos]=useState({data:JSON.parse(userTodos),loading:false,error:null})
  const [filters,setFilters]=useState({condition:"All"})
  const remainedTime=(todoDate)=>{
    const remainedDay=(todoDate-Date.now())/864000000;
    if(remainedDay<0) return "expired";
    const day=Math.round(remainedDay)
    const hour=Math.floor((remainedDay % 1)*24)
    return `${day} day & ${hour} hour to do`
  }
  const changeConditionHandler=(id)=>{
    axios.patch(`/api/todos/dynamicTodos/${id}`)
    .then(res=>setTodos({...todos,data:res.data.todos}))
    .catch(err=>toast.error(err.message))
  }

    return ( 
        <div className="flex flex-col gap-2">
        {
        (todos.loading) ? <p>loading</p> :
    (todos.data.length===0) ? <p>no todo</p> :
    <div className="flex flex-col gap-3 w-full">
      <TodoFilter />
    {todos.data.map(item=>(
       <Todoo key={item._id} todoName={item.todoName} id={item._id} 
       remainedTime={remainedTime(item.todoDate)} completed={item.completed}
       onChangeCondition={()=>changeConditionHandler(item._id)} 
       onCompleteHandler={()=>completeHandler(item._id)} 
       onTodoDelete={()=>todoDeleteHandler(item._id)}
       />
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