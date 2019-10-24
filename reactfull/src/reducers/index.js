import NumReducer from './NumReducer';
import UserListReducer from './UserListReducer';
import { combineReducers }  from 'redux';

//合并多个reducer 到 一个reducer 里面去
const rootReducer = combineReducers({
  Num: NumReducer,
  UserList: UserListReducer
});

export default rootReducer;
