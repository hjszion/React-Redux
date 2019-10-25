import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import  ProductDetail from  './ProductDetail';

class Product extends Component {
  render () {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div>
        product
        {/* {
          this.props.location.state ?
          <p>{ this.props.location.state.loginName }</p>
          :
          null
        } */}
        <Link to={`${match.path}/1`}>Product-1</Link> |
        <Link to={`${match.path}/2`}>Product-2</Link> |
        <Link to={`${match.path}/3`}>Product-3</Link>
        <hr/>

        <Route path={`${match.path}/:id`} component={ ProductDetail }>
        </Route>
        <hr/>
        <button
          onClick={ () => this.props.history.push('/about') }
        >ToAboutPage</button>
        <button
          onClick={ () => this.props.history.go(-1) }
        >Backward</button>
      </div>
    )
  }
}

export default Product