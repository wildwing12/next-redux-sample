import React from 'react'
import UserList from '../../containers/user/UserList'
import UserDbList from '../../containers/user/UserDbList'

// 회원 리스트 불러오기
function UserListCom() {
  return (
      <>
        <UserList/>
        <UserDbList/>
      </>
  )
}

export default UserListCom;