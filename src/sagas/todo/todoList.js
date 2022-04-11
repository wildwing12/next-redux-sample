import {call, put, takeEvery} from 'redux-saga/effects'
import {todoInsert} from '../../api'

const GET_TODOINSERT = 'todoList/GET_TODOLIST'
const GET_TODOINSERT_SUCCESS = 'todoList/GET_TODOLIST_SUCCESS'
const GET_TODOINSERT_ERROR = 'todoList/GET_TODOLIST_ERROR'

export const getTodoInsertSage = (todo) => {
  return ({type: GET_TODOINSERT, data: todo})
}

function* loadTodoInsertSaga(props) {
  try {
    yield call(todoInsert, props.data);
    yield put(
        {
          type: GET_TODOINSERT_SUCCESS,
          data: props.data
        }

    )
  } catch (error) {
    yield put(
        {
          type: GET_TODOINSERT_ERROR,
          error
        }
    )
  }
}

export function* todoPostsSage() {
  yield takeEvery(GET_TODOINSERT, loadTodoInsertSaga)
}

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export default function todoPosts(state = initialState, action) {
  switch (action.type) {
    case GET_TODOINSERT :
      state.loading = true
      state.data = null;
      state.error = null;
      return state;

    case GET_TODOINSERT_SUCCESS :
      state.loading = false;
      state.data = action.data;
      state.error = null;
      location.reload();
      return state;

    case GET_TODOINSERT_ERROR :
      state.loading = false;
      state.data = null;
      state.error = action.error;
      return state;

    default:
      return state;
  }

}



