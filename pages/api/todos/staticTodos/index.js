
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
        console.log(req.body)
        // const users = await Todo.create({}) /* find all the data in our database */
        // res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}