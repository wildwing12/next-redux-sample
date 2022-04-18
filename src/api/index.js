import axios from "axios";

// json 게시판 리스트
export const postsApi = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return data.data
}

// json 회원 리스트
export const userPostsApi = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  return data.data
}

// json 회원 조회
export const userViewPostsApi = async (id) => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return data.data
}

// api test
export const testApi = async () => {
  const api = await axios.get("http://localhost:8080/api/test")
  return api.data
}

// 회원 리스트
export const userListApi = async () => {
  const api = await axios.get("http://localhost:8080/api/userList")
  return api.data

}

// 일정 등록
export const todoInsert = async (infoData) => {
  const api = await axios.post("http://localhost:8080/api/todoInsert", infoData)
  return api.data
}

//일정 리스트
export const todoProps = async () => {
  const api = await axios.get("http://localhost:8080/api/todoList")
  return api.data
}

// 일정 업데이트
export const todoUpdate = async (infoData) => {
  const api = await axios.post("http://localhost:8080/api/todoUpdate", infoData)
  return api.data
}

// 일정 삭제
export const todoDelete = async (infoData) => {
  const api = await axios.post("http://localhost:8080/api/todoDelete", infoData)
  debugger;
  return api.data
}