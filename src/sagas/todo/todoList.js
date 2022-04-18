import {call, put, takeEvery} from 'redux-saga/effects'
import {todoDelete, todoInsert, todoProps, todoUpdate} from '../../api'

const GET_TODOINSERT = 'todoList/GET_TODOLIST'
const GET_TODOINSERT_SUCCESS = 'todoList/GET_TODOLIST_SUCCESS'
const GET_TODOINSERT_ERROR = 'todoList/GET_TODOLIST_ERROR'
const GET_TODOPOST = 'todoList/GET_TODOPOST'
const GET_TODOPOST_SUCCESS = 'todoList/GET_TODOPOST_SUCCESS'
const GET_TODOPOST_ERROR = 'todoList/GET_TODOPOST_ERROR'
const GET_TODOUPDATE = 'todoList/GET_TODOUPDATE'
const GET_TODOUPDATE_SUCCESS = 'todoList/GET_TODOUPDATE_SUCCESS'
const GET_TODOUPDATE_ERROR = 'todoList/GET_TODOUPDATE_ERROR'
const GET_TODODELETE = 'todoList/GET_TODODELETE'
const GET_TODODELETE_SUCCESS = 'todoList/GET_TODODELETE_SUCCESS'
const GET_TODODELETE_ERROR = 'todoList/GET_TODODELETE_ERROR'


// 저장
export const getTodoInsertSaga = (todo) => {
  return ({type: GET_TODOINSERT, data: todo})
}

// 리스트 출력
export const getTodoPosrSaga = () => {
  return ({type: GET_TODOPOST})
}

// 여부 수정
export const getTodoUpdateSaga = (todoSeq) => {
  return ({type: GET_TODOUPDATE, data: todoSeq})
}

// 일정 삭제
export const getTodoDeleteSaga = (todoArr) => {
  return ({type: GET_TODODELETE, data: todoArr});
}

function* loadTodoInsertSaga(props) {
  try {
    const propsData = yield call(todoInsert, props.data);
    yield put(
        {
          type: GET_TODOINSERT_SUCCESS,
          data: propsData
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

function* loadTodoPostSaga() {
  try {
    const props = yield call(todoProps);
    yield put(
        {
          type: GET_TODOPOST_SUCCESS,
          data: props
        }
    )
  } catch (error) {
    yield {
      type: GET_TODOPOST_ERROR,
      data: error
    }
  }
}

function* loadTodoUpdateSaga(props) {
  let infoData = props.data
  try {
    const props = yield call(todoUpdate, infoData)
    yield put({
      type: GET_TODOPOST_SUCCESS,
      data: props
    })
  } catch (error) {
    yield  {
      type: GET_TODOUPDATE_ERROR,
      data: error
    }
  }
}


function* loadTodoDeleteSaga(props) {
  let indoData = props.data
  try {
    const posts = yield call(todoDelete, indoData)
    yield put({
      type: GET_TODOPOST_SUCCESS,
      data: posts
    })


  } catch (error) {
    yield {
      type: GET_TODODELETE_ERROR,
      data: error
    }
  }
}


export function* todoPostsSaga() {
  yield takeEvery(GET_TODOINSERT, loadTodoInsertSaga)
  yield takeEvery(GET_TODOPOST, loadTodoPostSaga)
  yield takeEvery(GET_TODOUPDATE, loadTodoUpdateSaga)
  yield takeEvery(GET_TODODELETE, loadTodoDeleteSaga)
}

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export default function todoPosts(state = initialState, action) {
  switch (action.type) {
    case GET_TODOINSERT :
    case GET_TODOPOST :
    case GET_TODOUPDATE :
    case GET_TODODELETE :
      return {...state, loading: true};


      // return {...state, loading: false, data: state.data.filter(res => res.id !== action.data)};

    case GET_TODOPOST_SUCCESS :
    case GET_TODOINSERT_SUCCESS :
      return {...state, loading: false, data: action.data}


    case GET_TODODELETE_ERROR:
    case GET_TODOINSERT_ERROR :
    case GET_TODOPOST_ERROR :
    case GET_TODOUPDATE_ERROR :
      return {...state, loading: false, data: null, error: action.error};

    default:
      return state;
  }

}



