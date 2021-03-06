import React, { useState } from 'react';
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'

import { Row, Col } from 'antd';

const auth:React.FC = () => {
  
  return (
      <div>
        <Row>
          <Col span={6} offset={18}>
            <h3> Login </h3>
            <Login ></Login>
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={18}>
            <h3> Register </h3>
            <Register></Register>
          </Col>
        </Row>
      </div>
      )
    }
  export default auth;