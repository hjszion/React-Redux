import {UserListActionTypes} from '../actions/UserListAction';

export default function UserListReducer(preState = [], action){
    switch(action.type){
        case UserListActionTypes.LOAD_USERLIST:
            return action.payload;
        case UserListActionTypes.ADD_USER:
            return [...preState, action.payload]
        case UserListActionTypes.REMOVE_USER:
            return preState.filter(item => item.Id !== action.payload)
        case UserListActionTypes.UPDATE_USER:
            const replaceIndex = preState.findIndex(item => item.Id === action.payload.Id)
            return [...preState];   //reducer 处理完成之后都会返回一个新的状态
        default:
            return preState;
    }
}
