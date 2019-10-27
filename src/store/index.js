import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

// 创建Store: 组件中使用redux的统一入口。
// dispatch（action）
// subscribe(fn) 
// state: 状态，也就是数据。  state： count， num。
// 正常的格式是 const store = createStore(rootReducer, applyMiddleware(thunk))
// redux-thunk 中间件改造了redux的dispatch方法 允许我们用store.dispatch(fn) fn是一个函数 接收两个参数 dispatch, getState
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;


