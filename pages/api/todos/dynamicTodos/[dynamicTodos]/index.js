import dbConnect from '../../../../../lib/mongodb'
import Todo from '../../../../../models/todo.model'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'PATCH':
      try {
        const {dynamicTodos}=req.query;
        const todo= await Todo.findOne({_id:dynamicTodos})
        if(!todo) res.status(404).json({success:false,message:"todo not found"})
        const updateTodo = await Todo.updateOne(
            { _id : dynamicTodos },
            { $set: { completed : !todo.completed } }
         );
         if(updateTodo.modifiedCount===0) res.status(404).json({success:false,message:"server error"})
         const todos=await Todo.find({})
        res.status(200).json({ success: true, message: "todo updated successfully",todos })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
      case 'PUT':
      try {
        const {dynamicTodos}=req.query;
        const {todoName,todoDate}=req.body
        const todo= await Todo.findOne({_id:dynamicTodos})
        if(!todo) res.status(404).json({success:false,message:"todo not found"})
        const updateTodo = await Todo.updateOne(
            { _id : dynamicTodos },
            { $set: { todoName :todoName,todoDate:Date.now(todoDate) } }
         );
         if(updateTodo.modifiedCount===0) res.status(404).json({success:false,message:"server error"})
        res.status(200).json({ success: true, message: "todo updated successfully" })
      } catch (error) {
        res.status(400).json({ success: false,message:error.message })
      }
    default:
      res.status(400).json({ success: false,message:"error" })
      break
  }
}