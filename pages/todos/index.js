import { getCookie } from "cookies-next";
import Link from "next/link";
import  jwt  from 'jsonwebtoken'
import dbConnect from "../../lib/mongodb";
import User from '../../models/user.model.js'

const Todos = ({findedUser}) => {
    console.log(findedUser)
    return ( 
        <div>
            <Link href={"/todos/create"} legacyBehavior ><a>add new todo</a></Link>
        <div>todo list</div>
        </div>
     );
}

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
      if(!user) return res.status(400).json({ success: false ,message:"mobile or password is wrong"})
      //2- check if the userEmail in DB match with the email in token
      const compareResult=(user.email===email)
     if(!compareResult) return res.status(400).json({ success: false ,message:"mobile or password is wrong"})
       //3- set the token to the header and redirect to the main page
      const findedUser= JSON.stringify(user)
    return { props: {findedUser} };
  }
   
export default Todos;