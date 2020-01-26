import React, { Component } from 'react';
import { Form,Checkbox} from "antd";
import { FormComponentProps } from 'antd/es/form'

interface UserFormProps extends FormComponentProps {
    check:boolean;
  }

class TodoItem extends Component <UserFormProps,any>{
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
          };
        

          return(
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>
                        Todo Title gose here
                    </Checkbox>,
                )}
                </Form.Item>
            </Form>

        )
          
  
    }
  }

  const WrappedNormalTodoItemForm = Form.create({ name: 'normal_register' })(TodoItem);


  export default WrappedNormalTodoItemForm;
