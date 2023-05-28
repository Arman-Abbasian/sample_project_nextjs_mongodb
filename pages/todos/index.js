import Link from "next/link";

const Todos = () => {
    return ( 
        <div>
            <Link href={"/todos/create"} legacyBehavior ><a>add new todo</a></Link>
        <div>todo list</div>
        </div>
     );
}
 
export default Todos;