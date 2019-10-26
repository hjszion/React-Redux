import React, { Component, Fragment } from 'react';
import { Popconfirm, message } from 'antd';

class UserRow extends Component {
  
  state = {
    isEdit: false,
    EditUser: {...this.props.User}
  }

  hanlderChange = (e) => {
    this.setState({
      EditUser: {
        ...this.state.EditUser,
        [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value
      }
    });
  }

  render() {
    let { User } = this.props;
    let { EditUser } = this.state;
    return (
      <tr>
        {
           this.state.isEdit ? 
             <Fragment>
              <td>{ User.Id }</td>
              <td> <input onChange={ this.hanlderChange } type="text" name="UserName" value={ EditUser.UserName } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Address" value={ EditUser.Address } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Phone" value={ EditUser.Phone } /></td>
              <td> Delete Or Not <input onChange={ this.hanlderChange } type="checkbox" name="Del" checked={ EditUser.Del } /></td>
              <td> <input onChange={ this.hanlderChange } type="text" name="Remark" value={ EditUser.Remark } /></td>
              <td>
                <button className="button is-primary"
                  onClick={ () => this.props
                    .updateUser(EditUser) 
                    .then(res => {
                      message.info('Edit Success');
                      this.setState({isEdit: false});
                    })
                    .catch( () => {
                      message.error('Edit Failed, Try Again!');
                    })
                  }
                >Save</button>
                &nbsp;
                <button className="button is-danger"
                  onClick={ () => this.setState({isEdit: false})}
                >Cancel</button>
              </td>
             </Fragment>
           :
            <Fragment>
              <td>{ User.Id }</td>
              <td>{ User.UserName }</td>
              <td>{ User.Address }</td>
              <td>{ User.Phone }</td>
              <td>{ User.Del ? 'yes' : 'no' }</td>
              <td>{ User.Remark }</td>
              <td>
                <button 
                  onClick={ () => this.setState({isEdit: true})}
                  className="button is-primary">Edit</button>
                &nbsp;
                <Popconfirm 
                  title="Sure to Delete?"
                  okText="Delete"
                  cancelText="Cancel"
                  onConfirm={ () => this.props.delUser(User.Id) }
                >
                  <button className="button is-danger">Delete</button>
                </Popconfirm>
              </td>
            </Fragment>
        }
      </tr>
    );
  }
}

export default UserRow;