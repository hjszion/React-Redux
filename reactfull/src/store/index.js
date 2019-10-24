import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

//reducer: 唯一修改store中的数据的方法 接收两个参数 第一个参数是之前的state 第二个参数 当前action

//创建 store: 组件中使用redux的统一入口
//dispatch(action)
//subscribe(fn)
//state:状态 也就是数据:state: count, num
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   //在浏览器下方显示redux插件
    );   

export default store;

