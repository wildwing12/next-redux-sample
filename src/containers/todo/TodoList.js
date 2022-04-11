import {AgGridReact} from 'ag-grid-react'
import {useState} from 'react'

export default function TodoList() {
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
  ]);

  const [columnDefs] = useState([
    {field: '번호'},
    {field: '내용'},
    {field: '완료 날짜'},
    {field: '진행 날짜'},
  ])
  return (
      <div>
        <h4>할일 리스트</h4>
      </div>
  )
}