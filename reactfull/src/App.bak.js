import React, { Component } from 'react';
import './App.css';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, NavLink, Switch } from 'react-router-dom';

import Home from './view/home';
import About from './view/about';
import Product from './view/product';
import Empty from './view/empty';

// const getConfirmation = (message, callback) => {
//   console.log('!!!')
//   const allowTransition = window.confirm(message)
//   callback(allowTransition)
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>google.com</h1>
        {/* <Router hashType="noslash" basename="/app" forceRefresh={true} getUserConfirmation={getConfirmation}> */}
        <Router hashType="noslash" basename="/app" forceRefresh={true}>
          <div>
            <Link to="/home">Home</Link>|
            <Link to="/about">About</Link>|
            <Link to="/product" replace>Product</Link>|
            <Link to={{
              pathname: '/product',
              search: 'key=user',
              hash: '#userHeader',
              state: { loginName: 'google, google.com' }
            }}>Product99</Link>
            <NavLink
              to="/product"
              // activeStyle={{color:'red', fontSize:'30px'}}
              activeClassName='selected'
            >ProductNavLink</NavLink>
            <hr />
            <Switch>
              {/* 第一种渲染方式 可以传props到组件 */}
              <Route exact path="/home" component={Home}>
              </Route>
              {/* 第二种渲染方式 可以传props到组件 */}
              <Route path="/about" render={(props) => {
                return (
                  <About {...props}></About>
                )
              }}>
              </Route>
              {/* 第三种渲染方式 特殊的 自动定义match*/}
              <Route path="/product"
                children={(props) => {
                  console.log(props);
                  return props.match ? (<Product {...props}></Product>) : <p>Match Failed</p>
                }}
              ></Route>
              {/* 兜底的一个404组件 empty */}
              <Route component={ Empty }>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
