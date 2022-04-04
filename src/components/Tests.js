import React, {useEffect} from 'react';
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {getUserViewSage} from '../sagas/user/userPosts'

function Tests() {
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => {return state.userPosts})
  useEffect(() => {
    dispatch(getUserViewSage(1))
  }, [dispatch])

  console.log('data===>',data);

  return (
      <>
        <div>
          {data?.name}
        </div>
      </>
  )
}

export default Tests;
