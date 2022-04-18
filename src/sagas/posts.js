import {call, put, takeEvery, fork, takeLeading} from "redux-saga/effects";
import {postsApi} from "../api";

const GET_POSTS = 'pots/GET_POSTS';
const GET_POSTS_SUCCESS = 'pots/GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'pots/GET_POSTS_ERROR';
//화면에서 dispatch 하는 용도
export const getPostsSaga = () => ({type: GET_POSTS});

//사가 함수에 넣을 용도
function* loadPostsSaga() {
    try {
        const posts = yield call(postsApi);
        yield put({
            type:GET_POSTS_SUCCESS,
            posts
        })
    }catch (error){
        yield put({
            type:GET_POSTS_ERROR,
            error
        });
    }
}
//위에꺼 합쳐줄 용도
export function * postsSaga(){
    yield takeEvery(GET_POSTS,loadPostsSaga);
}


const initialState = {
    loading:false,
    data:null,
    error:null,
}

// 리듀서
export default function posts(state = initialState, action){
    switch (action.type){
        case GET_POSTS:
            return common(state, true, null, null);
      case GET_POSTS_SUCCESS:
          return common(state, false, action.posts, null);
        case GET_POSTS_ERROR:
            return  common(state, false, null, action.error);
        default:
            return state;
    }
}

const common  = (state,value1, value2, value3) =>{
  return {
    ...state,
    loading:value1,
    data:value2,
    error:value3,
  }
}
