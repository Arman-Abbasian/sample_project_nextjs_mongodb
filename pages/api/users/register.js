import dbConnect from '../../../lib/mongodb'
import User from '../../../models/user.model.js'
import { userRegisterValidation } from '../../../validations/register.validation'
import  jwt  from 'jsonwebtoken'



export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'POST':
      try {
        //validation with zod
    const response=userRegisterValidation(req.body)
    if (!response.success) {
    const { errors } = response.error;
    console.log(errors)
    const returnedErrors=errors.map(item=>{
      return {fieldName:item.path[0],message:item.message}
    })
    return res.status(400).json({
    error: { message: "Invalid request", returnedErrors },
    });
  }
  //if there would be no problem then create data in db
  const payload={mobile:req.body.mobile,email:req.body.email}
      const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"365 days"})
      console.log(token)
      const {name,email,mobile,password}=req.body
      const newUser={name,email,mobile,password,token}
        const oneUser = await User.create(newUser) /* create a new model in the database */
        res.status(201).json({ success: true, data: "user added successfully" })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false ,message:error.message})
      }
      break

    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}