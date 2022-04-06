import axios from "axios";


export const postsApi = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return data.data
}

export const userPostsApi = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  return data.data
}

export const userViewPostsApi = async (id) => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return data.data
}

export const testApi = async () => {
  const api = await axios.get("http://localhost:8080/api/test")
  return api.data
}

export const userListApi = async () => {
  const api = await axios.get("http://localhost:8080/api/userList")
  console.log(api);
  return api
}