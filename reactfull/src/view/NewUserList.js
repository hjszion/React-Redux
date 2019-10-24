//rrdc  创建一个react-redux组件

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';

function mapStateToProps(state) {
    return {
        UserList:state.UserList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserList:() => dispatch(UserListActionCreators.LoadUserListAsyncAction())
    };
}

class NewUserList extends Component {
    constructor(props){
        super(props);
        this.props.loadUserList();
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
                        {
                            this.props.UserList.map((item, index) => 
                            <tr>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewUserList);