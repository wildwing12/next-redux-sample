import React, {useEffect} from 'react';
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {getUserViewSage} from '../sagas/user/userPosts'

function Tests({id}) {
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state.userPosts)

  useEffect(() => {
    dispatch(getUserViewSage(id))
  }, [dispatch])

  console.log('data===>',data);
    if(loading) return <span>Loading...</span>;
    if(!data) return null;

  return (
      <>
        <div>
          {/*{loading && <span>Loading...</span>}*/}
          <h1>{data.username}</h1>
          {/*{data?.map(res=><span key={res.id}>{res.name}</span>)}*/}
        </div>
      </>
  )
}

export default Tests;
