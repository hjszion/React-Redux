import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    componentDidMount(){
        //加载数据
        axios.get('http://yapi.demo.qunar.com/mock/7378/api/userlist')
    }
    render() {
        return (
            <div>
                UserList
            </div>
        );
    }
}

export default UserList;