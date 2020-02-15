import React from 'react';

import { Form, Input, Button, DatePicker } from 'antd';


import { FormComponentProps } from 'antd/es/form'



interface UserFormProps extends FormComponentProps {
  title:string;
  description:string;
  startDate:Date;
  endDate:Date;
  tags:string;
  score:any;
  form:any
}
const CreateProject:React.FC<UserFormProps> = ({ form, title , description ,startDate ,endDate ,tags,score }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err:string, values:string) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
    const { getFieldDecorator } = form;
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
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Project Title">
          {getFieldDecorator('Field-1', {
            rules: [
              {
                required: true,
                message: 'Please input Project Title',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Project Description">
          {getFieldDecorator('Field-2', {
            rules: [
              {
                required: true,
                message: 'Please input Project Title',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Project Range Date">
        {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
        </Form.Item>

        <Form.Item label="Project tags">
          {getFieldDecorator('Field-3', {
            rules: [
              {
                required: true,
                message: 'Please input Project Title',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create Project
          </Button>
        </Form.Item>
      </Form>
    );
  }
export default Form.create()(CreateProject);