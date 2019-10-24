import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Empty extends Component {
  render () {
    return (
      <div>
        404！
        <Link to="/">回到首页</Link>
      </div>
    )
  }
}

export default Empty