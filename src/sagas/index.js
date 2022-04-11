import { all, fork } from 'redux-saga/effects';
import {postsSaga} from "./posts";
import {userPostSaga} from './user/userPosts'
import {todoPostsSage} from './todo/todoList'


export default function* rootSaga() {
    yield all([
         postsSaga(),userPostSaga(),todoPostsSage()
    ]);
}