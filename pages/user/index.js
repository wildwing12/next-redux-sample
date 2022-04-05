import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {getUserPostsSaga} from '../../src/sagas/user/userPosts'
import {AgGridReact} from 'ag-grid-react'
import {useRouter} from 'next/router'

// 회원 리스트 불러오기
function User() {

  const router = useRouter();
  console.log('router==>', router);

  const {loading, data, error} = useSelector(state => {
    console.log('state.userPosts===>', state.userPosts)
    return state.userPosts;
  });

  const [col, setCol] = useState([{field: "id"}, {field: "name"}, {field: "email"}, {field: "phone"}]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPostsSaga());
  }, [dispatch]);

  if (loading) return <div>loading...</div>
  if (error) return <div>에러발생</div>
  if (!data) return <div>데이터가 없습니다.</div>

  console.log(data.id);

  return (
      <div className="ag-theme-alpine" style={{height: 530, width: 600}}>
        <AgGridReact
            rowData={data}
            onRowClicked={(e) => router.push(`/userView/${e.data.id}`)}
            columnDefs={col}
            pagination={true}
            paginationPageSize={10}
            cacheBlockSize={10}
        >
        </AgGridReact>

      </div>
  )

}


export default User;