import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class about extends Component {
    constructor(props){
        super(props);
        this.state = {
            login:true
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                About!
                <input type="button" value="Logout2Home" onClick={() => this.setState({login:false})}></input>

                {!this.state.login && <Redirect to="/home"></Redirect>}

                <p>
                    ==={
                        this.props.location.pathname
                    }===
                </p>
            </div>
        );
    }
}

export default about;