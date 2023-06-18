import Link from "next/link";
import { AiOutlineCheck,AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Todoo = ({id,todoName,remainedTime,completed,onChangeCondition,onTodoDelete}) => {
    return ( 
        <div className="flex justify-center items-center p-2 bg-blue-100 gap-6">
            <div className="flex justify-between item-center flex-1 bg-red-100">
                <p>{todoName}</p>
                {completed ? <p>done</p> : <p>{remainedTime}</p>}
            </div>
           <div className="flex gap-4">
            <div className="flex justify-center items-center">
                {completed && <AiOutlineCheck className="w-5 h-5 cursor-pointer" onClick={onChangeCondition} />}
                {!completed && <MdCheckBoxOutlineBlank className="w-5 h-5 cursor-pointer" onClick={onChangeCondition} />}
            </div>
            <Link legacyBehavior href={`/todos/${id}`} className="flex justify-center items-center"><a><AiOutlineEdit className="w-5 h-5 cursor-pointer"/></a></Link>
            <div className="flex justify-center items-center"><AiOutlineDelete className="w-5 h-5 cursor-pointer" onClick={onTodoDelete}/></div>
           </div>

        </div>
     );
}
 
export default Todoo;