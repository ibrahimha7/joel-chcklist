import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox,Tooltip } from 'antd';
import Password from 'antd/lib/input/Password';

import { FormComponentProps } from 'antd/es/form'



interface UserFormProps extends FormComponentProps {
  firstName:string;
  lastName:string;
  username: string;
  email:string;
  password: Password;
}

class Register extends Component <UserFormProps,any> {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    handleConfirmBlur = (e: React.FocusEvent<HTMLFormElement>) => {
      const { value } = e.target as HTMLFormElement;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule:any, value:any, callback:any) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule:any, value:any, callback:any) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    handleWebsiteChange = (value:any) => {
      let autoCompleteResult:any;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };

    render() {
      const { getFieldDecorator } = this.props.form;

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
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                  validator: this.validateToNextPassword,
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
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={()=> (this.handleConfirmBlur)} />)}
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

  }


const WrappedNormalRegForm = Form.create({ name: 'normal_register' })(Register);


export default WrappedNormalRegForm;