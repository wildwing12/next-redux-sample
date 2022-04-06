import React from 'react'
import AgGrid from '../../src/containers/AgGrid'

// 회원 리스트 불러오기
function User() {
  return (
      <>
        {/*<AgGrid witch={'user'}/>*/}
        <h1>데이터 불러오는</h1>
        <AgGrid witch={'userList'}/>
      </>
  )
}


export default User;