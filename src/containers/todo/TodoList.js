import {AgGridReact} from 'ag-grid-react'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTodoDeleteSaga, getTodoPosrSaga, getTodoUpdateSaga} from '../../sagas/todo/todoList'

export default function TodoList() {

  const dispatch = useDispatch();
  const [select, setSelect] = useState([]);
  const [api, setApi] = useState([]);

  const {loading, data, error} = useSelector(state => {
    return state.todoPosts;
  });

  useEffect(() => {
    dispatch(getTodoPosrSaga());
  }, [])


  const [columnDefs] = useState([
    {checkboxSelection: true},
    {field: 'todoCd', headerName: "여부"},
    {field: 'cntt', headerName: "내용"},
    {field: 'cmplDt', headerName: "기간"},
    {field: 'regDts', headerName: "등록일자"},
  ])

  if (loading) return <div> <img className="loadigng" alt="loadigng.gif" src="img/loading.gif" style={{height:"50px"}}/></div>
  if (error) return <div>에러발생</div>
  if (!data) return <div>데이터가 없습니다.</div>

  // 상태 여부 변경
  function todoUpdata(data) {
    let todoInfo = data.data;
    dispatch(getTodoUpdateSaga(todoInfo));
  }

// 일정 삭제 준비
  function onGridReady(param) {
    setApi(param.api.rowModel.rowsToDisplay);
  }

// 일정 삭제 처리
  function todoDelelte() {
    console.log('api=>', api);
    const arr = api.filter(data => data.selected === true).map((res) => {
      return res.data.todoSeq;
    });
    dispatch(getTodoDeleteSaga(arr));
  }

  return (
      <div>
        <h4>할일 리스트</h4>
        <div className="ag-theme-alpine" style={{height: 500, width: '100%'}}>

          <AgGridReact
              rowData={Array.isArray(data) ? data : [{...data}]}
              columnDefs={columnDefs}
              suppressRowClickSelection={true}
              rowSelection={'multiple'}
              onGridReady={onGridReady}
              // onCellClicked={(e) => {
              //   todoDelelteState(e)
              // }}

          ></AgGridReact>
          <button onClick={todoDelelte}>삭제</button>
        </div>
      </div>
  )
}