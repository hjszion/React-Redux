import {NumActionCreators, NumActionTypes} from '../actions/NumAction';

export default function NumReducer(preState = 0, action) {   //这里设定了preState的默认值为0
    //根据当前action的不同 对preState做一些修改或者做一些处理 然后返回一个新的状态
    switch (action.type) {
        case NumActionTypes.ADD_NUM:
            return preState + action.payload;
        case NumActionTypes.MINUS_NUM:
            return preState - action.payload;
        case NumActionTypes.REPLACE_NUM:
            return action.payload;
        default:
            return preState;
    }
}