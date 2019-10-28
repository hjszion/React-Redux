import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from '../actions/UserListAction';
import UserRow from '../components/UserRow';
import AddUser from '../components/AddUser';

function mapStateToProps(state) {
  return {
    UserList: state.UserList,
  };
}

function mapDispatchToProps(dispatch) {   //这里就对应redux-thunk中间件的store.dispatch(fn(dispatch, getState)) 外层的 dispatch
  return {
    loadUserList: () => dispatch(UserListActionCreators.LoadUserListAsyncAction()),  //fn 就是这里的 .xxxUserAsyncAction()
    delUser: (id) => dispatch(UserListActionCreators.RemoveUserAsyncAction(id)),
    updateUser: (user) => dispatch(UserListActionCreators.UpdateUserAsynAction(user)),
    addUser: (user) => dispatch(UserListActionCreators.AddUserAsynAction(user))
  };
}

class NewUserList extends Component {
  constructor(props) {
    super(props);
    this.props.loadUserList();   //加载组件的同时就开始 .loadUser()以获得当前json-server上储存的data 每次都会重新渲染
  }
  render() {
    return (
      <div>
        <h3 className="title">UserList</h3>
        <AddUser addUser={ this.props.addUser }></AddUser>
        <table className="table is-striped is-hoverable is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Address</th>
              <th>Phone</th>
              <th>DelOrNot</th>
              <th>Remark</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.UserList.map( (item, index) => <UserRow updateUser={ this.props.updateUser } saveUser={ this.props.saveUser } delUser={ this.props.delUser } key={index} User={item}></UserRow>)
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
