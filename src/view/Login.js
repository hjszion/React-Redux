import React, { Component } from 'react'

class Login extends Component {
  loginClick = () => {
    //直接把用户校验完的信息，加入到sessionStoryage里去，然后跳转首页
    sessionStorage.setItem('APP_LOGIN_USER', JSON.stringify({Name: 'google.com', pwd: '666666'}));   //JSON.stringify() 将对象或者数组转为JSON字符串
    
    //判断用户之前有没有输入之前的地址 决定跳转到之前的地址或者跳转到首页
    let lastLocation = JSON.parse(sessionStorage.getItem('APP_LAST_URL'))   //APP_LAST_URL定义在  中
    if(lastLocation) {
      sessionStorage.removeItem('APP_LAST_URL');
      this.props.history.push(lastLocation);
    } else {
      this.props.history.push('/app');
    }
  }

  render () {
    return (
      <div>
        Login
        <hr/>
        <button 
          onClick={this.loginClick}
          className="button is-primary">LogIn</button>
      </div>
    )
  }
}

export default Login