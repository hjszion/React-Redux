//rrdc  创建一个react-redux组件

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';
import UserRow from '../components/UserRow';

function mapStateToProps(state) {
    return {
        UserList: state.UserList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction())
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
                            this.props.UserList.map((item, index) => <UserRow key={index} User={item}></UserRow>)
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