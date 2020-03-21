import React,{useState} from 'react';
import { Form, Input, Button ,Typography,Select,Popover } from 'antd';
import {UserOutlined, MailOutlined,
  CheckOutlined, CloseOutlined} from '@ant-design/icons';
import styles from './reg.module.scss';
import {useFirebase} from '../../Firebase/FirebaseContext'


const {Title, Text} = Typography;
const {Option} = Select;
const patternAZ = /[A-Z]/;
const patternaz = /[a-z]/;
const pattern09 = /[0-9]/;
const patternSC = /[!#@$%^&*)(+=._-]/;

const Register:React.FC = () => {
  
  const [isPopConditionValue, setPopConditionValue] = useState(false);
  const [password, setPassword] = useState<string>('');
  const content = (
    <>
      <Text>{ !(password?.length < 8) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      Be at least 8 charachter </Text> <br />
      <Text>{ (patternAZ.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      Be at leaste 1 Uppercase charachter </Text> <br />

      <Text>{ (patternaz.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
     Be at leaste 1 Lowercase charachter  </Text> <br />


      <Text>{ (pattern09.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      Be at leaste 1 Number charachter </Text> <br />

      <Text>{ (patternSC.test(password)) ?
      <CheckOutlined className={styles.icon__GreenColor}/> :
      <CloseOutlined className={styles.icon__grayColor} />}
      Be at leaste 1 Special  charachter </Text>
    </>
  );

  // react using firebase 

  const firebase = useFirebase();
  const onFinish = (values:Object) => {
    setPassword('');
    firebase.users().push(values, () => {
    console.log('new user has been added');
  })
  };

  const popOverPop = () => {
    !isPopConditionValue ? setPopConditionValue(true) :
        setPopConditionValue(false);
  };
  const popOverHide = () => {
    isPopConditionValue ? setPopConditionValue(false) :
        setPopConditionValue(false);
  };

  // firebase.users().push(values, () => {
  //   console.log('new user has been added');
  // })
      return (
        <>
        <h1>Register</h1>
        <Title
        level={2}
        className={styles.register__title}>
        Register
      </Title>
      <Form
        hideRequiredMark={true}
        name="normal_sign"
        initialValues={{prefix: '+966'}}
        layout={'vertical'}
        onFinish={onFinish}
      >
        <Form.Item
          label='FIRST NAME'
          name="firstName"
          required={false}
          rules={[{required: true, message:  'Field Required',},
            {max: 50}]}
        >
          <Input maxLength={50}
            prefix={<UserOutlined />}
            placeholder= 'FIRSTNAME'/>
        </Form.Item>

        <Form.Item
          label='LAST NAME'
          name="lastName"
          required={false}
          rules={[{required: true, message:  'Field Required',},
            {max: 50,}]}
        >
          <Input maxLength={50}
            prefix={<UserOutlined />}
            placeholder='LAST NAME' />
        </Form.Item>

        <Form.Item
          label='EMAIL'
          name="email"
          required={false}
          rules={[
            {
              type: 'email',
            },
            {
              required: true,
              message:  'Field Required',
            },
            {max: 50},
          ]}

        >
          <Input maxLength={50}
            prefix={<MailOutlined />}
            placeholder= 'EMAIL' />
        </Form.Item>

        <Form.Item
          label='PASSWORD'
        >
          <Form.Item
            noStyle
            required={false}
            name={'password'}
            rules={[
              {
                required: true,
                message:  'Field Required',
              },
              {
                min: 8,
                message: ' ',
              },
              {
                pattern: /[A-Z]/,
                message: '  ',
              },
              {
                pattern: /[a-z]/,
                message: ' ',
              },
              {
                pattern: /[0-9]/,
                message: ' ',
              },
              {
                pattern: /[!#@$%^&*)(+=._-]/,
                message: ' ',
              },
              {max: 50, message:'CHAR_LESS_THAN_50'},
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder={'password'}
              maxLength={50}
              onFocus={popOverPop}
              onBlur={ popOverHide}
              onChange ={({target}) =>
                setPassword(target.value)}
            />
          </Form.Item>
          <Popover
            placement="top"
            title='PASSWORD REQUIREMENTS'
            content={content}
            trigger="click" visible={isPopConditionValue} />
        </Form.Item>

        <Form.Item
          label='CONFIRM_PASSWORD'
          name="confirm"
          required={false}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message:  'Field Required',
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                    new Error('PASSWORD_DONT_MATCH'),);
              },
            }),
          ]}
        >
          <Input.Password placeholder='CONFIRM_PASSWORD' />
        </Form.Item>

       
        <Form.Item>
          <Button type="primary" htmlType="submit"
            className={styles.register__btn}>
            Register
          </Button>
        </Form.Item>
      </Form>

        
        </>
      );
    }


export default Register;