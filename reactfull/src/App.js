import React, { Component } from 'react';
import {HashRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import Login from './view/Login';
import Empty from './view/empty';
import Home from './view/home';

class App extends Component {
    checkUserState(){
        //判断用户是否已经登录
        if(sessionStorage.getItem('APP_LOGIN_USER')){
            return true;
        }
        return false;
    }
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/app"></Redirect>}></Route>

                    <Route path="/login" component={Login}></Route>

                    <Route path="/app" render={(props) => {
                        //校验用户是否已经登录
                        if(this.checkUserState()){
                            return <Home {...props}></Home>
                        }

                        //记录下 用户原来的地址 用户登录失败后直接跳转回此地址
                        sessionStorage.setItem('APP_LAST_URL', JSON.stringify(props.location));
                        return <Redirect to="/login"></Redirect>
                    }}></Route>

                    <Route component={Empty}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;