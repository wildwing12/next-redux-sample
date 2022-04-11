import TodoInsert from '../../src/containers/todo/todoInsert'
import TodoList from '../../src/containers/todo/TodoList'

export default function Todo() {
  return (
      <div>
        <h1>TODO_LIST</h1>
        <TodoInsert/>
        <TodoList/>
      </div>
  );
}