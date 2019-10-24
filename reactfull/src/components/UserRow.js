import React, { Component, Fragment } from 'react';
import { Popconfirm } from 'antd';

class UserRow extends Component {

    state = {
        isEdit = false,
        EditUser: {...this.props.User}
    }

    handlerChange = (e) => {}

    render() {
        let { User } = this.props;
        let { EditUser } = this.state;
        return (
            <tr>
                {
                    this.state.isEdit ?
                        <Fragment>
                            <td>{User.Id}</td>
                            <td><input onChange={this.handlerChange} type="text" name="UserName" value={EditUser.UserName} /></td>
                            <td><input onChange={this.handlerChange} type="text" name="Address" value={EditUser.Address} /></td>
                            <td><input onChange={this.handlerChange} type="text" name="Phone" value={EditUser.Phone} /></td>
                            <td>DeleteOrNot<input onChange={this.handlerChange} type="checkbox" name="Del" value={EditUser.Del} /></td>
                            <td><input onChange={this.handlerChange} type="checkbox" name="Remark" value={EditUser.Remark} /></td>
                            <td>
                                <button className="button is-primary">Edit</button>
                                &nbsp;
                                <Popconfirm title="Sure Delete?" okText="Delete" cancelText="Cancel" onConfirm={() => this.props.delUser(User.Id)}>
                                    <button className="button is-danger">DELETE</button>
                                </Popconfirm>
                            </td>
                        </Fragment>
                        :
                        <Fragment>
                            <td>{User.Id}</td>
                            <td>{User.UserName}</td>
                            <td>{User.Address}</td>
                            <td>{User.Phone}</td>
                            <td>{User.Del ? 'yes' : 'no'}</td>
                            <td>{User.Remark}</td>
                            <td>
                                <button className="button is-primary">Edit</button>
                                &nbsp;
                                <Popconfirm title="Sure Delete?" okText="Delete" cancelText="Cancel" onConfirm={() => this.props.delUser(User.Id)}>
                                    <button className="button is-danger">DELETE</button>
                                </Popconfirm>
                            </td>
                        </Fragment>
                }
            </tr>
        );
    }
}

export default UserRow;