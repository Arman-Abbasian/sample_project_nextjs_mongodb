import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodb";
import User from '../../../models/user.model'
import Todo from '../../../models/todo.model'

const EditTodo = ({findedTodo}) => {
    console.log(JSON.parse(findedTodo))
    return ( 
        <div>

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