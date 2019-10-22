import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class empty extends Component {
    render() {
        return (
            <div>
                404-Page!
                <link to="/">Back2Home</link>
            </div>
        );
    }
}

export default empty;