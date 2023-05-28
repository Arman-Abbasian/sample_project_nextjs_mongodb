import axios from "axios";
import { useState } from "react";

const CraeteTodo = () => {
    const [formData,setFormData]=useState({todoName:"",todoDate:""})
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler=()=>{
        axios.post("/api/todos/staticTodos",formData)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    return ( 
        <div>
            <div className="container mx-auto max-w-md">
                <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoName">todo name</label>
                    <input type="text" name="todoName" id="todoName" className="form-input" onChange={changeHandler} />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="todoDate">todo date</label>
                    <input type="date" name="todoDate" id="todoDate" className="form-input" onChange={changeHandler} />
                    </div>
                    <input type="submit" value="Add" className="bg-blue-500"/>
                </form>
            </div>
        </div>
     );
}
 
export default CraeteTodo;