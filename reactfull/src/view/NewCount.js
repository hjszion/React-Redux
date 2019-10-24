//rrdc 所生成的 react-redux 组件模版

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NumActionCreators } from '../actions/NumAction';

//把容器组件的状态映射到UI组件的props里面去 state是redux里面的状态数据
function mapStateToProps(state) {
    return {
        WebSite:'google.com',
        Num:state.Num
    };
}

//dispatch 是 redux中分发action的api函数
//事件逻辑都是放在这里 映射给UI组件的方法
function mapDispatchToProps(dispatch) {
    return {
        addNum(num){
            dispatch(NumActionCreators.AddActionCreator(num));
        },
        minusNum(num){
           dispatch(NumActionCreators.MinusActionCreator(num));
        }
    };
}

//UI组件 负责展示逻辑和事件绑定
class NewCount extends Component {
    render() {
        return (
            <div>
                <p>
                    This is state from ourselves: { this.props.WebSite }
                </p>
                <p>
                    Get Data-State from Redux: { this.props.WebSite }
                </p>
                <button onClick={() => this.props.addNum(1)}>+1</button>
                <button onClikc={() => {this.props.minusNum(1)}}>-1</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCount);

