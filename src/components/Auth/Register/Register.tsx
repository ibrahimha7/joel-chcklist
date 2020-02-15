import React from 'react';

import { Form, Icon, Input, Button, Checkbox,Tooltip } from 'antd';
import Password from 'antd/lib/input/Password';

import { FormComponentProps } from 'antd/es/form'



interface UserFormProps extends FormComponentProps {
  firstName:string;
  lastName:string;
  username: string;
  email:string;
  password: Password;

  form:any
  
}

const Register:React.FC<UserFormProps> = ({firstName,lastName,username,email,password,form}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      form.validateFieldsAndScroll((err:string, values:string) => {
        if (!err) {
          console.log('Received values of form: ', values);
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

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      }

      return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item label="First Name">
            {getFieldDecorator('first name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator('last name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          
          <Form.Item label="E-mail">
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
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
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
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
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
            })(<Input.Password onBlur={()=> (handleConfirmBlur)} />)}
          </Form.Item>
          
          <Form.Item
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href=" ">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }


export default Form.create()(Register);;