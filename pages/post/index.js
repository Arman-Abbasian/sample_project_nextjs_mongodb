import axios from "axios"
import { useEffect } from "react"

const Posts=()=>{
    useEffect(()=>{
        axios.get("http://localhost:3000/api/addPost")
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <ul>
                {/* {posts.map(post=>{
                    return <li key={post._id}>{post.title}</li>
                })} */}
            </ul>
        </div>
    )
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axios.get("http://localhost:3000/api/addPost")
    console.log(res.data)
    const posts = res.data
  
    // Pass data to the page via props
    return { props: { posts } }
  }
  export default Posts;