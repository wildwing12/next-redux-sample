import { all, fork } from 'redux-saga/effects';
import {postsSaga} from "./posts";
import {userPostSaga} from './user/userPosts'
import {todoPostsSaga} from './todo/todoList'


export default function* rootSaga() {
    yield all([
         postsSaga(),userPostSaga(),todoPostsSaga()
    ]);
}