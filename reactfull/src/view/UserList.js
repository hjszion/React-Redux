import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import { UserListActionCreators } from '../actions/UserListAction';
import { Popconfirm, message } from 'antd';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserList: store.getState().UserList,
            unsubscribe: store.subscribe(() => {
                this.setState({
                    UserList: store.getState().UserList
                })
            })
        };
    }
    componentWillUnmount() {
        this.state.unsubscribe();   //移除监听
    }

    componentDidMount() {
        //加载数据
        axios.get('http://localhost:3009/userlist')
            .then(res => {
                //把data放到store.state里面去
                console.log(res.data)

                //向store发送一个action 加载用户数据
                store.dispatch(UserListActionCreators.LoadUserListAction(res.data))
            });
    }

    delUser = (id) => {
        // axios.delete('http://localhost:3009/userlist/'+ id)
        // .then(res => {
        //     //提示删除成功 把redux中的数据移除掉 
        //     message.info('Delete Success!');
        //     store.dispatch(UserListActionCreators.RemoveUserAction(id));         
        // })
        // .catch(() => {
        //     message.error('Delete Failed! Try again!');
        // })
        store.dispatch(UserListActionCreators.RemoveUserAsyncAction(id))
        .then(res => {
            message.info('delete success!');
        }).catch(() => {
            message.error('delete failed! Try Again!');
        })
    }

    render() {
        return (
            <div>
                <h3 className="title">UserList</h3>
                <table className="table is-striped is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserName</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Delete</th>
                            <th>Remark</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.UserList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Id}</td>
                                <td>{item.UserName}</td>
                                <td>{item.Address}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Del ? 'yes' : 'no'}</td>
                                <td>{item.Remark}</td>
                                <td>
                                    <button className="button is-primary">Edit</button>
                                    &nbsp;
                                    <Popconfirm title="Sure Delete?" okText="delete" cancelText="cancel" onConfirm={() => this.delUser(item.Id)}>
                                        <button
                                            className="button is-danger">Delete</button>
                                    </Popconfirm>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;