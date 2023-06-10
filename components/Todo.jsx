import { AiOutlineCheck,AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Todoo = ({todoName,remainedTime,completed}) => {
    return ( 
        <div className="flex justify-center items-center p-2 bg-blue-100 gap-6">
            <div className="flex justify-between item-center flex-1 bg-red-100">
                <p>{todoName}</p>
                <p>{remainedTime}</p>
            </div>
           <div className="flex gap-4">
            <div className="flex justify-center items-center">
                {completed && <AiOutlineCheck className="w-5 h-5 cursor-pointer" />}
                {!completed && <MdCheckBoxOutlineBlank className="w-5 h-5 cursor-pointer" />}
            </div>
            <div className="flex justify-center items-center"><AiOutlineEdit className="w-5 h-5 cursor-pointer"/></div>
            <div className="flex justify-center items-center"><AiOutlineDelete className="w-5 h-5 cursor-pointer"/></div>
           </div>

        </div>
     );
}
 
export default Todoo;