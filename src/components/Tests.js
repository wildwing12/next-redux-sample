import React, {useEffect} from 'react';
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {getUserViewSage} from '../sagas/user/userPosts'

function Tests() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state.userPosts)


  useEffect(() => {
    dispatch(getUserViewSage(1))
  }, [dispatch])

  console.log('data===>',data);

  return (
      <>
        <div>
          {loading && <span>Loading...</span>}
          {data?.map(res=><span key={res.id}>{res.name}</span>)}
        </div>
      </>
  )
}

export default Tests;
