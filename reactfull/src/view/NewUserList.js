//rrdc  创建一个react-redux组件

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';
import UserRow from '../components/UserRow';
import AddUser from '../components/AddUser';

function mapStateToProps(state) {
    return {
        UserList: state.UserList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction()),
        delUser:(id) => dispatch(UserListActionCreators.RemoveUserAsyncAction(id)),
        updateUser:(user) => dispatch(UserListActionCreators.UpdateUserAsyncAction(user))
    };
}

class NewUserList extends Component {
    constructor(props) {
        super(props);
        this.props.loadUserList();
    }
    render() {
        return (
            <div>
                <AddUser></AddUser>
                <h3 className="title">UserList</h3>
                <table className="table is-striped is-hoverable is-bordered is-fullwidth">
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
                            this.props.UserList.map((item, index) => <UserRow updateUser={this.updateUser} delUser={this.props.delUser} key={index} User={item}></UserRow>)
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