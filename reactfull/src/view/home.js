import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/logo.png';

import About from './about';
import Product from './product';
import Count from './Count';
import store from '../store';

class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Num:store.getState().Num
        }
        //当store里面的state发生改变的时候 会自动触发绑定函数执行
        store.subscribe(() => {  
            this.setState({Num:store.getState().Num})
        })
    }
    logout = () => {
        //清除sessionStorage里面的用户登录的信息
        sessionStorage.clear();
        this.props.history.push('/login');
    }
    
    render() {
        console.log(this.props);  //打印history location math 等
        let { match } = this.props;   //对象的解构赋值
        return (
            <div>
                {/* 网站顶部导航 */}
                <nav className="navbar">
                    <div className="navbar-band">
                        <Link to="/app"><img src={Logo} alt="google.com" width="130" title="website-logo" /></Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to={`${match.path}/app`}>HomePage</Link>
                            <Link className="navbar-item" to={`${match.path}/product`}>Product</Link>
                            <Link className="navbar-item" to={`${match.path}/cases`}>SuccessCase</Link>
                            <Link className="navbar-item" to={`${match.path}/count`}>Count</Link>
                            <Link className="navbar-item" to={`${match.path}/about`}>About</Link>
                        </div>
                        <div className="navbar-end">
                            <button onClick={this.logout} className="button is-danger">Logout</button>
                        </div>
                    </div>
                </nav>

                {/* 网站主要内容区域 */}
                <main className="columns">
                    <div className="menu-list column is-one-fifth has-background-info">
                        <Link className="navbar-item" to="/app">HomePage</Link>
                        <br/>
                        <Link className="navbar-item" to={`${match.path}/product`}>Product</Link>
                        <br/>
                        <Link className="navbar-item" to={`${match.path}/cases`}>SuccessCases</Link>
                        <br/>
                        <Link className="navbar-item" to={`${match.path}/count`}>Count</Link>
                        <br/>
                        <Link className="navbar-item" to={`${match.path}/about`}>About</Link>
                    </div>
                    <div className="column has-background-primary">
                        <Switch>
                            <Route path={`${match.path}/about`} component={About}></Route>
                            <Route path={`${match.path}/product`} component={Product}></Route>
                            <Route path={`${match.path}/count`} component={Count}></Route>
                            <Route render={() => {
                                return (
                                    <div className="hero">
                                        <h3 className="title">Welcome Visit Us!</h3>
                                        <p className="subtitle">Your Visit Is Our Pleasure!</p>
                                    </div>
                                )
                            }}></Route>
                        </Switch>
                    </div>
                </main>
                <div className="footer has-background-light">
                    copyright@google.com   ={this.state.Num}=
                </div>
            </div>
        );
    }
}

export default home;