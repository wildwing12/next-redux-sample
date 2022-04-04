import axios from "axios";



export const postsApi = async () =>{
    const data= await axios.get("https://jsonplaceholder.typicode.com/posts")
    return data.data
}

export const userPostsApi = async () =>{
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data.data
}