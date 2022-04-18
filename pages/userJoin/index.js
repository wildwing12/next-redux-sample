import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {getUserJoinSaga, getUserPostsSaga} from '../../src/sagas/user/userPosts'
import {AgGridReact} from 'ag-grid-react'
import AgGrid from '../../src/containers/user/AgGrid'

function UserJoin() {
  let [info, setInfo] = useState({id: "", name: "", phone: "", email: ""});

  const dispatch = useDispatch();

  function joinBtn(e) {
    e.preventDefault();
    dispatch(getUserJoinSaga(info));
  }

  return (
      <>
        <input type="text" placeholder={"ID"} onChange={(e) => {
          setInfo(prev => ({...prev, id: e.target.value}))
        }}/>
        <input type="text" placeholder={"name"} onChange={(e) => {
          setInfo(prev => ({...prev, name: e.target.value}))
        }}/>
        <input type="text" placeholder={"Phone"} onChange={(e) => {
          setInfo(prev => ({...prev, phone: e.target.value}))
        }}/>
        <input type="text" placeholder={"Email"} onChange={(e) => {
          setInfo(prev => ({...prev, email: e.target.value}))
        }}/>
        <button onClick={joinBtn}>회원가입</button>

        <AgGrid witch={'user'}/>
      </>
  )

}

export default UserJoin;