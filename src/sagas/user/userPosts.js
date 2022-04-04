import {userPostsApi, userViewPostsApi} from '../../api'
import {call, put, takeEvery} from 'redux-saga/effects'
import Axios from 'axios'
import {EXPORT_MARKER} from 'next/constants'

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


// 회원 리스트 불러오는
export const getUserPostsSaga = () => ({type: GET_USER_POSTS});

// 회원가입
export const getUserJoinSage = (info) => {
  return ({type: USER_JOIN, data: info})
}

// 회원 조회
export const getUserViewSage = (id) => {
  return ({type: USER_VIEW, id})
}

// state 초기값
const initialState = {
  loading: false, data: null, error: null,
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
function* loadUserViewSage(data) {
  try {
    const res = yield call(userViewPostsApi,data.id);
    yield put({
      type: USER_VIEW_SUCCESS,
      res
    })
  } catch (error) {
    yield put({
      type: USER_VIEW_ERROR, error
    })
  }
}


export function* userPostSaga() {
  // 회원 리스트 불러오는
  yield takeEvery(GET_USER_POSTS, loadUserPostsSaga);
  // 회원가입
  yield takeEvery(USER_JOIN, loadUserJoinSaga);
  // 회원 조회
  yield takeEvery(USER_VIEW, loadUserViewSage);
}


export default function posts(state = initialState, action) {
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
      console.log(action.data);
      return common(state, false, action.data, null);

      //회원 조회
    case USER_VIEW:
      return common(state, true, null, null)
    case USER_VIEW_SUCCESS:
      debugger;
      return common(state, false, action.res, null)

    case GET_USER_POSTS_ERROR :
    case USER_JOIN_ERROR :
    case USER_VIEW_ERROR :
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
