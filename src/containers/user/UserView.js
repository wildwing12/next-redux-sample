import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getUserDeleteSaga, getUserViewSage} from '../../sagas/user/userPosts'
import {useRouter} from 'next/router'
import UserUpdate from './UserUpdate'

function UserView({id}) {

  const router = useRouter();
  const dispatch = useDispatch();

  const {loading, data, error} = useSelector(state => {
    return state.userPosts;
  });


  useEffect(() => {
    dispatch(getUserViewSage(id))
  }, [dispatch])


  // 삭제
  function userDeleteBtn(id) {
    dispatch(getUserDeleteSaga(id));
  }

  return (
      <>
        <div>
          <h1>{data?.username}</h1>
          <h2>{data?.id}</h2>
          <button onClick={() => {
            userDeleteBtn(id)
          }}>삭제!
          </button>

          <UserUpdate data={data}/>

          <button onClick={() => router.back()}>뒤로가기</button>
        </div>
      </>
  )
}

export default UserView;
