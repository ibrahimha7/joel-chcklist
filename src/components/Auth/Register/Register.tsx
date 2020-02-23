import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Password from 'antd/lib/input/Password';

import { FormComponentProps } from 'antd/es/form'

import {useFirebase} from '../../Firebase/FirebaseContext'



interface UserFormProps extends FormComponentProps {
  firstName:string;
  lastName:string;
  username: string;
  email:string;
  password: Password;

  form:any
  
}

const Register:React.FC<UserFormProps> = ({firstName,lastName,username,email,password,form}) => {
  // react using firebase 
  const firebase = useFirebase();
  console.log(firebase)

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      form.validateFieldsAndScroll((err:string, values:string) => {
        if (!err) {
          firebase.users().push(values, () => {
            console.log('new user has been added');
          })
          // console.log('Received values of form: ', values);
        }
      });
    };

    const handleConfirmBlur = (e: React.FocusEvent<HTMLFormElement>) => {
      // const { value } = e.target as HTMLFormElement;
      // const setValue = () => ({ confirmDirty: value.confirmDirty || !!value });
    };

    const compareToFirstPassword = (rule:any, value:any, callback:any) => {
      // const { form:any } = form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    const validateToNextPassword = (rule:any, value:any, callback:any) => {
      // const { form:any } = form;
      if (value && value.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    // const handleWebsiteChange = (value:any) => {
    //   let autoCompleteResult:any;
    //   if (!value) {
    //     autoCompleteResult = [];
    //   } else {
    //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    //   }
    //   const setValue = ({ autoCompleteResult });
    // };

      const { getFieldDecorator } = form;

      

      return (
        <div>
        <h1>Register</h1>
        
        <Form onSubmit={handleSubmit} className="login-form" style={{ width:'50%' , display:'inline-block'}}>
          <Form.Item>
            {getFieldDecorator('first name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your First Name!',
                },
              ],
            })(
              <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
            />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('last name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />
            )}
          </Form.Item>
          
          <Form.Item >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
              <Input
              prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            })(
              <Input.Password
              prefix={<Icon type="alert" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
            )}
          </Form.Item>
          <Form.Item  hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(
              <Input.Password
              prefix={<Icon type="alert" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder=" Confirm Password"
              onBlur={()=> (handleConfirmBlur)} />
               )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
            })(
              <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
            )}
          </Form.Item>
          
          <Form.Item >
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href=" ">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    }


export default Form.create()(Register);;