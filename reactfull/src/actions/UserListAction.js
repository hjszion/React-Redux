import axios from 'axios';

export const UserListActionTypes = {
    LOAD_USERLIST: 'LOAD_USERLIST',
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    UPDATE_USER: 'UPDATE_USER'
}

export const UserListActionCreators = {
    //直接把后台获取的用户的数据替换当前state中的UserList
    LoadUserListAction(payload) {
        return {
            type: UserListActionTypes.LOAD_USERLIST,
            payload
        }
    },
    AddUserAction(payload) {
        return {
            type: UserListActionTypes.ADD_USERLIST,
            payload
        }
    },
    RemoveUserAction(payload) {
        return {
            type: UserListActionTypes.REMOVE_USER,
            payload
        }
    },
    RemoveUserAsyncAction(payload) {
        return function (dispatch, getState) {
            return axios.delete('http://localhost:3009/userlist/' + payload)
                .then(res => {
                    //提示删除成功 把redux中的数据移除掉 
                    //message.info('Delete Success!');
                    dispatch(UserListActionCreators.RemoveUserAction(payload));
                });
        }
    }
}