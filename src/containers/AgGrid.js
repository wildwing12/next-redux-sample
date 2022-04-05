import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {AgGridReact} from 'ag-grid-react'
import {useRouter} from 'next/router'
import {getUserPostsSaga, getUserViewSage} from '../sagas/user/userPosts'

// 회원 리스트 불러오기
function AgGrid({witch, id}) {

  const router = useRouter();
  const dispatch = useDispatch();
  let dispatchName = null;

  const {loading, data, error} = useSelector(state => {
    return state.userPosts;
  });

  const [col, setCol] = useState([{field: "id"}, {field: "name"}, {field: "email"}, {field: "phone"}]);

  useEffect(() => {
    switch (witch) {
      case 'user':
        dispatchName = getUserPostsSaga();
        break;
      case 'userJoin':
        dispatchName = getUserPostsSaga();
        break;
      default :
    }
    dispatch(dispatchName);
  }, [dispatch]);


  if (loading) return <div>loading...</div>
  if (error) return <div>에러발생</div>
  if (!data) return <div>데이터가 없습니다.</div>

//삼항연산자
//조건 true or false ? true일떄 : false일떄 나올거;

  return (
      <div className="ag-theme-alpine" style={{height: 530, width: 600}}>
        <AgGridReact
            rowData={Array.isArray(data)? data : [{...data}] }
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


export default AgGrid;