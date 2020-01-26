import React, { Component } from 'react';

import { Form, Input, Button, DatePicker } from 'antd';


import { FormComponentProps } from 'antd/es/form'



interface UserFormProps extends FormComponentProps {
  title:string;
  description:string;
  startDate:Date;
  endDate:Date;
  tags:string;
  score:any;
}
class CreateTodo extends Component <UserFormProps,any> {
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { RangePicker } = DatePicker;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

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
        <Form.Item label="Todo Title">
          {getFieldDecorator('Field-1', {
            rules: [
              {
                required: true,
                message: 'Please input Todo Title',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Todo Description">
          {getFieldDecorator('Field-2', {
            rules: [
              {
                required: true,
                message: 'Please input Todo Title',
              },
            ],
          })(<Input />)}
        </Form.Item>


        <Form.Item label="Todo Range Date">
        {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
        </Form.Item>

        

        
        
        <Form.Item label="Todo tags">
          {getFieldDecorator('Field-3', {
            rules: [
              {
                required: true,
                message: 'Please input Todo Title',
              },
            ],
          })(<Input />)}
        </Form.Item>

        


        
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create Todo
          </Button>
        </Form.Item>
      </Form>
    );
  }

}


const WrappedNormalTodoForm = Form.create({ name: 'normal_CreateTodo' })(CreateTodo);


export default WrappedNormalTodoForm;