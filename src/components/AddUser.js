import React, { Component } from 'react'
import { Modal, message } from 'antd';

class AddUser extends Component {
  state = {
    visible: false,
    UserName: '',
    Phone: '',
    Address: '',
    Remark: ''
  }

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getAddUser = () => {
    return {
      UserName: this.state.UserName,
      Address: this.state.Address,
      Remark: this.state.Remark,
      Phone: this.state.Phone,
      Id: Date.now(),
      Del: false
    }
  }

  render () {
    return (
      <div>
        <button
          onClick={ () => this.setState({visible: true}) }
         className="button is-warning">Add</button>
        <Modal
          title="AddUser"
          okText="Add"
          cancelText="Cancel"
          visible={ this.state.visible }
          onCancel={ () => this.setState({visible: false})}
          onOk={ 
            () => this.props.addUser(this.getAddUser())
                      .then(res => {
                        message.info('AddSuccess');
                        this.setState({visible: false})
                      })
                      .catch(() => {
                        message.error('AddFailed, Try Again!');
                      })
          }
        >
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td>UserName</td>
                <td>
                  <input type="text" name="UserName" onChange={ this.handlerChange } value={ this.state.UserName }/>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input type="text" name="Address" onChange={ this.handlerChange } value={ this.state.Address }/>
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input type="text" name="Phone" onChange={ this.handlerChange } value={ this.state.Phone }/>
                </td>
              </tr>
              <tr>
                <td>Remark</td>
                <td>
                  <textarea type="text" name="Remark" onChange={ this.handlerChange } value={ this.state.Remark }>
                  </textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

export default AddUser