import React, { Component } from 'react';
import { Popconfirm } from 'antd';

class UserRow extends Component {
    render() {
        let { User } = this.props;
        return (
            <tr>
                <td>{User.Id}</td>
                <td>{User.UserName}</td>
                <td>{User.Address}</td>
                <td>{User.Phone}</td>
                <td>{User.Del ? 'yes' : 'no'}</td>
                <td>{User.Remark}</td>
                <td>
                    <button className="button is-primary">Edit</button>
                    &nbsp;
                    <Popconfirm title="Sure Delete?" okText="Delete">
                        <button className="button is-danger">DELETE</button>
                    </Popconfirm>
                </td>
            </tr>
        );
    }
}

export default UserRow;