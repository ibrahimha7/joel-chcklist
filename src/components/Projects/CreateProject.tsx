import React from 'react';

import { Form, Input, Button, DatePicker ,Icon} from 'antd';


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


    return (
      <div>
        <br/>
        <br/>

      <h1>Add New Project</h1>
      <Form onSubmit={handleSubmit} style={{ width:'50%' , display:'inline-block'}}>
        <Form.Item >
          {getFieldDecorator('Field-1', {
            rules: [
              {
                required: true,
                message: 'Please input Project Title',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Project Title"
            />
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('Field-2', {
            rules: [
              {
                required: true,
                message: 'Please input Project Description',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Project Description"
            />
          )}
        </Form.Item>

        <Form.Item >
        {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
        </Form.Item>

        <Form.Item >
          {getFieldDecorator('Field-3', {
            rules: [
              {
                required: true,
                message: 'Please input Project Tags',
              },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Project Tags"
            />
          )}
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Create Project
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
export default Form.create()(CreateProject);