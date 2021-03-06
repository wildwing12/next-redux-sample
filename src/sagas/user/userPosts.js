import {userListApi, userPostsApi, userViewPostsApi} from '../../api'
import {call, put, takeEvery} from 'redux-saga/effects'

// 회원 리스트 불러오는
const GET_USER_POSTS = 'userPosts/GET_USER_POSTS';
const GET_USER_POSTS_SUCCESS = 'userPosts/GET_GET_USER_POSTS_SUCCESS';
const GET_USER_POSTS_ERROR = 'userPosts/GET_GET_USER_POSTS_ERROR';

// 회원 가입
const USER_JOIN = 'userPosts/USER_JOIN';
const USER_JOIN_SUCCESS = 'userPosts/USER_JOIN_SUCCESS';
const USER_JOIN_ERROR = 'userPosts/USER_JOIN_ERROR';

// 회원 조회
const USER_VIEW = 'userPost/USER_VIEW';
const USER_VIEW_SUCCESS = 'userPost/USER_VIEW_SUCCESS';
const USER_VIEW_ERROR = 'userPost/USER_VIEW_ERROR';

// 회원 삭제
const USER_DELETE = 'userPost/USER_DELETE';
const USER_DELETE_SUCCESS = 'userPost/USER_DELETE_SUCCESS';
const USER_DELETE_ERROR = 'userPost/USER_DELETE_ERROR';

// 회원 리스트 조회_DB
const USER_LIST = 'userPost/USER_LIST';
const USER_LIST_SUCCESS = 'userPost/USER_LIST_SUCCESS';
const USER_LIST_ERROR = 'userPost/USER_LIST_ERROR';


// 회원 리스트 불러오는
export const getUserPostsSaga = () => ({type: GET_USER_POSTS});

// 회원가입
export const getUserJoinSaga = (info) => {
  return ({type: USER_JOIN, data: info})
}

// 회원 조회
export const getUserViewSaga = (id) => {
  return ({type: USER_VIEW, id})
}

// 회원 삭제
export const getUserDeleteSaga = (id) => {
  return ({type: USER_DELETE, id})
}

// 회원 리스트 조회_DB
export const getUserListSaga = () => {
  return ({type: USER_LIST})
}


// 회원 리스트 불러오는
function* loadUserPostsSaga() {
  try {
    const posts = yield call(userPostsApi);
    yield put({
      type: GET_USER_POSTS_SUCCESS, posts
    })
  } catch (error) {
    yield put({
      type: GET_USER_POSTS_ERROR, error
    });
  }
}

// 회원가입
function* loadUserJoinSaga(props) {
  try {
    const info = props.data;
    yield put({
      type: USER_JOIN_SUCCESS,
      data: info
    });
  } catch (error) {
    yield put({
      type: USER_JOIN_ERROR, error
    })
  }
}

// 회원 조회
function* loadUserViewSaga({id}) {
  try {
    const paramId = yield call(userViewPostsApi, id);
    yield put({
      type: USER_VIEW_SUCCESS,
      data: paramId
    })
  } catch (error) {
    yield put({
      type: USER_VIEW_ERROR, error
    })
  }
}

// 회원 삭제
function* loadUserDeleteSaga({id}) {
  try {
    const userList = yield call(userPostsApi);
    const newUserList = userList.filter((arr) => arr.id === id)
    yield put({
      type: USER_DELETE_SUCCESS,
      data: newUserList
    })
  } catch (error) {
    yield put({
      type: USER_DELETE_ERROR, error
    })
  }
}

// 회원 리스트 조회_DB
function* loadUserListSaga() {
  try {
    const userList = yield call(userListApi);
    yield put({
      type: USER_LIST_SUCCESS, userList
    })
  } catch (error) {
    yield put({
      type: USER_LIST_ERROR, error
    })
  }
}

export function* userPostSaga() {
  // 회원 리스트 불러오는
  yield takeEvery(GET_USER_POSTS, loadUserPostsSaga);
  // 회원가입
  yield takeEvery(USER_JOIN, loadUserJoinSaga);
  // 회원 조회
  yield takeEvery(USER_VIEW, loadUserViewSaga);
  // 회원 삭제
  yield takeEvery(USER_DELETE, loadUserDeleteSaga);
  // 회원 리스트 조회_DB
  yield takeEvery(USER_LIST, loadUserListSaga);
}

// state 초기값
const initialState = {
  loading: false, data: null, error: null,
}

export default function userPosts(state = initialState, action) {
  switch (action.type) {
      // 회원 리스트 불러오는
    case GET_USER_POSTS :
      return common(state, true, null, null)
    case GET_USER_POSTS_SUCCESS:
      return common(state, false, action.posts, null)

      // 회원가입
    case USER_JOIN:
      return common(state, true, state.data, null)
    case USER_JOIN_SUCCESS:
      return common(state, false, state.data.concat(action.data), action.error)

      //회원 조회
    case USER_VIEW:
      return common(state, true, null, null)
    case USER_VIEW_SUCCESS:
      return common(state, false, action.data, null)

      // 회원 삭제
    case USER_DELETE:
      return common(state, true, null, null)
    case USER_DELETE_SUCCESS:
      return common(state, false, null, null)

      // 회원 리스트 조회_DB
    case USER_LIST:
      return common(state, true, null, null)
    case USER_LIST_SUCCESS:
      return common(state, false, action.userList, null)

    case GET_USER_POSTS_ERROR :
    case USER_JOIN_ERROR :
    case USER_VIEW_ERROR :
    case USER_DELETE_ERROR :
    case USER_LIST_ERROR:
      return common(state, false, null, action.error)

    default:
      return state;
  }
}

const common = (state, loading, data, error) => {
  return {
    ...state, loading: loading, data: data, error: error
  }
}
