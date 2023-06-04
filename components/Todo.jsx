import { AiOutlineCheck,AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

const Todoo = ({todoName,remainedTime,completed}) => {
    return ( 
        <div className="flex justify-center items-center">
            <div className="flex justify-between item-center">
                <p>{todoName}</p>
                <p>{remainedTime}</p>
            </div>
            <div className="flex justify-center items-center">
                {completed && <AiOutlineCheck />}
            </div>
            <div className="flex justify-center items-center"><AiOutlineEdit/></div>
            <div className="flex justify-center items-center"><AiOutlineDelete/></div>

        </div>
     );
}
 
export default Todoo;