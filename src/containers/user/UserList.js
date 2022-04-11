import React from 'react'
import AgGrid from '/src/containers/user/AgGrid.js'

// 회원 리스트 불러오기
function UserList() {
  return (
      <>
        <h1>User List 불러오는</h1>
        <AgGrid witch={'user'}/>
      </>
  )
}


export default UserList;