import React, { Component } from 'react';
import store, {ActionCreators, ActionTypes} from '../store';

class Count extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            Num:store.getState()   //从redux中的state中拿到Num数据
        }
        //当store里面的state发生改变的时候 会自动触发绑定函数执行
        store.subscribe(()=>{
            this.setState({
                Num: store.getState()
            })
        })
    }

    addNum = () => {
        //通过store触发一个 加1的action
        store.dispatch(ActionCreators.AddActionCreator(1))   //1 == payload of AddActionCreator()
    }
    minNum = () => {
        //通过store触发一个 减1的action
        store.dispatch(ActionCreators.MinusActionCreator(1))
    }
    replace = () => {
        //通过store触发一个 replace的action
        store.dispatch(ActionCreators.ReplaceActionCreator(Date.now()))
    }

    render() {
        return (
            <div>
                <h3>Data in Store:{this.state.Num}</h3>
                <hr/>
                <input onClick={this.addNum} className="button is-info" type="button" value="+1" />
                <input onClick={this.minNum} className="button is-danger" type="button" value="-1" />
                <input onClick={this.replace} className="button is-info" type="button" value="Replace-Value" />
            </div>
        );
    }
}

export default Count;