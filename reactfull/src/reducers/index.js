import NumReducer from './NumReducer';
import UserListReducer from './UserListReducer';
import {combineReducers} from 'redux';

//合并多个reducer到一个reducers 里面
const rootReducer = combineReducers({
    Num: NumReducer,
    UserList: UserListReducer
});

export default rootReducer;
