import TodoInsert from '../../src/containers/todo/todoInsert'
import TodoList from '../../src/containers/todo/TodoList'
import {SweetAlert} from '../../src/utile/alert'
import Swal from 'sweetalert2'

export default function Todo() {

  const alert = (title,text,icon) =>{

    SweetAlert(title,text,icon);
  }


  return (
      <div>
        <h1>TODO_LIST</h1>
        <TodoInsert/>
        <TodoList/>
        <button onClick={()=>{alert('title','text','')}}>버튼</button>
      </div>
  );
}