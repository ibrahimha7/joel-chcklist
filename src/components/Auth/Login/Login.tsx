import React from 'react';
import { Form, Input, Button } from 'antd';
import Password from 'antd/lib/input/Password';


const Login:React.FC = ( ) => {
   const onFinish = (values: Object) => {
    console.log('Received values of form: ', values);
  };
    return ( 
    <>
      <h1>Login</h1>
      <Form
        layout={'vertical'}
        name="login_form"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label='Email'
          required={false}
          rules={[{
            required: true,
            message: 'Please input your email!',
            type: 'email'}]}>
          <Input
            placeholder="Name@company.com" />
        </Form.Item>
        <Form.Item
          required={false}
          name="password"
          label={Password}
          rules={[{required: true, message: 'Please input your Password!'}]}>
          <Input.Password placeholder="********" />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary"
            htmlType="submit">
            Login
          </Button>
        </Form.Item>

      </Form>
      </>
    );
    
  }




  export default Login;