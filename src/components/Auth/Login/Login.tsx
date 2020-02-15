import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Password from 'antd/lib/input/Password';

import { FormComponentProps } from 'antd/es/form';

interface UserFormProps extends FormComponentProps {
  username:string
  password:Password
  form:any
}




const Login:React.FC<UserFormProps> = ( { username,password,form} ) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((err:string, values:string) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

    const { getFieldDecorator } = form;
    return ( <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="login-form" style={{ width:'50%' , display:'inline-block'}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox> Remember me </Checkbox>)}
          <a className="login-form-forgot" href=" ">
             Forgot password  
          </a>
          
          Or <a href=" "> register now! </a>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
    
  }




  export default Form.create()(Login);