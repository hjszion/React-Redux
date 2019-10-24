import React, { Component } from 'react';
import { Modal } from 'antd';

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
    
    render() {
        return (
            <div>
               <button onClick={() => this.setState({visible:true})} className="button is-warning">
                   <Modal title='AddUser' okText="Add" cancelText="cancel" visible={ this.state.visible } onCancel={() => this.setState({visible:false})}>
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