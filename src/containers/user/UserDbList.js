import React from 'react'
import AgGrid from '/src/containers/user/AgGrid.js'

// 회원 리스트 불러오기
function UserDbList() {
  return (
      <>
        <h1>User DB List 불러오는</h1>
        <AgGrid witch={'userList'}/>
      </>
  )
}


export default UserDbList;