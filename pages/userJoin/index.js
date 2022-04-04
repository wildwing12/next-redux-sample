import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {getUserJoinSage, getUserPostsSaga} from '../../src/sagas/user/userPosts'
import {AgGridReact} from 'ag-grid-react'

function UserJoin() {
  let [info, setInfo] = useState({id: "", name: "", phone: "", email: ""});
  const [col, setCol] = useState([{field: "id"}, {field: "name"}, {field: "email"}, {field: "phone"}]);

  const {loading,data,error} = useSelector(state => {
    return state.userPosts;
  });

  const dispatch = useDispatch();

  function joinBtn(e) {
    e.preventDefault();
    dispatch(getUserJoinSage(info));
  }

  useEffect(()=>{
    dispatch(getUserPostsSaga())
  },[dispatch]);
  // if (loading) return <div>loading...</div>
  // if (error) return <div>에러발생</div>
  // if (!data) return <div>데이터가 없습니다.</div>
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

        { data &&
            <div className="ag-theme-alpine" style={{height: 530, width: 600}}>
          <AgGridReact
              rowData={data}
              columnDefs={col}
              pagination={true}
              paginationPageSize={10}
              cacheBlockSize={10}
          >
          </AgGridReact>
        </div>}
      </>
  )

}

export default UserJoin;