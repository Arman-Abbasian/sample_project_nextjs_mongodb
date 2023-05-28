
import { headers } from 'next/dist/client/components/headers.js'
import dbConnect from '../../../../lib/mongodb.js'
import Todo from '../../../../models/todo.model.js'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: todos })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
      case 'POST':
      try {
        const {todoName,todoDate}=req.body
        console.log(req.body)
        const newTodo={todoName,todoDate}
        // await Todo.create(newTodo)
        // res.status(200).json({ success: true, message: "todo created successfully" })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}