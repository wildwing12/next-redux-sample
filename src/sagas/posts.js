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

export default function posts(state = initialState, action){
    switch (action.type){
        case GET_POSTS:
            return{
                ...state,
                loading:true,
                data:null,
                error:null,
            };
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                loading: false,
                data:action.posts,
                error:null,
            };
        case GET_POSTS_ERROR:
            return{
                ...state,
                loading: false,
                data:null,
                error:action.error,
            };
        default:
            return state;
    }
}