import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getTodoInsertSaga} from '../../sagas/todo/todoList'

export default function TodoInsert() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({todoId: '작성자_id', cntt: '', cmplDt: null});


  function todoInsertBtn() {
    dispatch(getTodoInsertSaga(todo));
  }

  return (
      <div>
        <h4>할일 작성</h4>
        <input type="hidden" value={'작성자_id'}/>
        <br/>
        <label htmlFor="cntt">내용</label>
        <input type="text" id={'cntt'} placeholder={'내용'}
               onChange={(e) => {
                 setTodo(todo => ({...todo, cntt: e.target.value}))
               }}
        />
        <br/>
        <label htmlFor="date">date:</label>
        <input type="date" id="completionDate"
               min="2000-01-01" max="2030-12-31"
               onChange={(e) => {
                 setTodo(todo => ({...todo, cmplDt: e.target.value}))
               }}/>
        <br/>
        <button onClick={() => {
          todoInsertBtn()
        }}>할일 등록
        </button>
      </div>
  )
}