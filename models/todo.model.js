import mongoose from 'mongoose'
import { bool } from 'yup';
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
/* PetSchema will correspond to a collection in your MongoDB database. */
const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: [true,"please enter the name"],
    maxlength: [20, 'Name cannot be more than 20 characters'],
    minlength: [3, 'Name cannot be less than 3 characters'],
  },
  todoDate: {
    type: String,
    required: [true,"please enter the email"],
  },
  todayDate:{
  type: String,
  dafault:Date.now()
},
completed:{
  type:Boolean,
  default:false
},
userID:{
    type: ObjectId,
    required:true
}

})
module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)