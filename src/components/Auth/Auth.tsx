import React, { Component } from 'react';
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'

class auth extends Component {
    render() {

      
      return (
      <div>
        {/* Login componint  */}
        <Login>
        </Login>
        {/* register componint */}
        <Register>
        </Register>

      </div>
      )
    }
  }

  export default auth;