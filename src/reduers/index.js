import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';
import posts from "../sagas/posts";
import userPosts from "../sagas/user/userPosts";
import todoPosts from '../sagas/todo/todoList'


// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {...state, ...action.payload};
      default:
        return state;
    }
  },
//여기에 추가
  posts, userPosts, todoPosts
});

export default rootReducer;