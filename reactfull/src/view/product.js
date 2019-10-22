import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';

class product extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                Product!
                {/* {
                    this.props.location.state ? <p>{this.props.location.state.loginName}</p> : null
                } */}
                <Link to={`${match.path}/1`}>Product1</Link>|
                <Link to={`${match.path}/2`}>Product2</Link>|
                <Link to={`${match.path}/3`}>Product3</Link>
                <hr/>
                <Route path={`${match.path}/:id`} component={ProductDetail}> 
                </Route>
                <hr/>
                <button
                onClick={() => this.props.history.push('/about')}
                >Button2About</button>
                <button
                onClick={() => this.props.history.go(-1)}
                >ButtonBack</button>
            </div>
        );
    }
}

export default product;