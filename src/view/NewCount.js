import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NumActionCreators } from '../actions/NumAction';

// 把容器组件的状态映射到UI组件的props里面去。  state是redux里面的状态数据。
// UI组件的输入逻辑
function mapStateToProps(state) {
  return {
    WebSite: 'google.com',
    Num: state.Num
  };
}

// dispatch 是redux中的分发action的api函数。
// 事件逻辑都是放在这里，映射给UI组件的方法。
// UI组件的输出逻辑
function mapDispatchToProps(dispatch) {
  return {
    addNum(num) {
      dispatch(NumActionCreators.AddActionCreator(num));
    },
    minusNum(num) {
      dispatch(NumActionCreators.MinusActionCreator(num));
    }
  };
}

// UI 组件负责展示逻辑和事件绑定 这里NewCount就是这个UI组件
class NewCount extends Component {
  render() {
    return (
      <div>
        <p>
          This is the state from us: { this.props.WebSite }
        </p>
        <p>
          This is the state from redux: { this.props.Num }
        </p>
        <button
          onClick={ () => this.props.addNum(1) }
        >+1</button>
        <button
          onClick={ () => this.props.minusNum(1) }
        >-1</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCount);