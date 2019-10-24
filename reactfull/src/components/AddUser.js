import React, { Component } from 'react';
import { Modal, message } from 'antd';

class AddUser extends Component {
    state={
        visible:false,
        UserName:'',
        Phone:'',
        Address:'',
        Remark:''
    }
    
    handlerChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
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
    
    render() {
        return (
            <div>
               <button onClick={() => this.setState({visible:true})} className="button is-warning">
                   <Modal 
                   title='AddUser' 
                   okText="Add" 
                   cancelText="cancel"
                   visible={ this.state.visible } 
                   onCancel={() => this.setState({visible:false})} 
                   onOk={() => 
                    this.props.addUser(this.getAddUser())
                    .then(res => {
                        message.info('add success!');
                        this.setState({visible:false})
                    })
                    .catch(() => {
                        message.error('add failed, try again!');
                    })
                   }
                   >
                       <table className="table table is-fullwidth">
                           <tbody>
                               <tr>
                                   <td>UserName</td>
                                   <td>
                                       <input onChange={this.handlerChange} type="text" name="UserName" value={this.state.UserName} />
                                   </td>
                               </tr>
                               <tr>
                                   <td>Address</td>
                                   <td>
                                       <input onChange={this.handlerChange} type="text" name="Address" value={this.state.Address} />
                                   </td>
                               </tr>
                               <tr>
                                   <td>Phone</td>
                                   <td>
                                       <input onChange={this.handlerChange} type="text" name="Phone" value={this.state.Phone} />
                                   </td>
                               </tr>
                               <tr>
                                   <td>Remark</td>
                                   <td>
                                       <textarea onChange={this.handlerChange} type="text" name="Remark" value={this.state.Remark} />
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                   </Modal>
               </button>
            </div>
        );
    }
}

export default AddUser;