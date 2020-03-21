import React,{useState} from 'react';
import { Form, Input, DatePicker, Tag,Tooltip,Button } from 'antd';
import { useFirebase } from 'components/Firebase/FirebaseContext'
import TextArea from 'antd/lib/input/TextArea';
import ReactTagInput from "@pathofdev/react-tag-input";
import nextId from "react-id-generator";



const checklistContent = [
  { key: 1 , text: "Do you use source control?"},
  { key: 2 , text: "Can you make a build in one step?"},
  { key: 3 , text: "Do you make daily builds?" },
  { key: 4 , text: "Do you have a bug database?"},
  { key: 5 , text: "Do you fix bugs before writing new code?"},
  { key: 6 , text: "Do you have an up-to-date schedule?"},
  { key: 7 , text: "Do you have a spec?"},
  { key: 8 , text: "Do programmers have quiet working conditions?"},
  { key: 9 , text: "Do you use the best tools money can buy?" },
  { key: 10 , text: "Do you have testers?" },
  { key: 11 , text: "Do new candidates write code during their interview?"},
  { key: 12 , text: "Do you do hallway usability testing?"},
]



const CreateProject: React.FC = () => {
  
  const htmlId = nextId();
  // tags state
  const [tags, settags] = useState<Array<string>>([])
  const [inputValue, setinputValue] = useState('')
  //tags functions 

  const handleInputConfirm = (e:React.FormEvent) => {
    e.preventDefault();
    if (inputValue && tags.indexOf(inputValue) === -1) {
      settags([...tags, (inputValue) ])
    }
    
  };

  const handleClose = (removedTag:any) => {
    // const tags = this.state.tags.filter(tag => tag !== removedTag);
    const tag = tags.filter(tag => tag !== removedTag);
    console.log(tags);
    // this.setState({ tags });
    settags(tag)
  };

  const prefixTags = (
    <>  
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag color="geekblue"  key={tag} closable={index !== 0} onClose={() => handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      
    </>
  )

  
  const firebase = useFirebase();
  const onFinish = (values: any) => {
    values.tags = tags
    values.checklist = checklistContent
    values.startDate = values.startDate.toLocaleString();
    values.endDate = values.endDate.toLocaleString();
    values.score = 0
    values.id = htmlId
    console.log(values)
    firebase.projects().push(values, () => {
      console.log('new user has been added');
    })
  };

  return (
    <>
      <Form
        layout={'vertical'}
        name="login_form"
        onFinish={onFinish}
      >

        <Form.Item
          label='Project Title'
          name="projectTitle"
          required={false}
          rules={[
            {
              required: true,
            },
            { max: 50},
          ]}
        >
          <Input maxLength={50} placeholder='Project Title' />
        </Form.Item>

        <Form.Item
          label='Project Title'
          name="projectDescription"
          required={false}
          rules={[
            {
              required: true,
            },
            { max: 50},
          ]}
        >
          <TextArea maxLength={50} placeholder='Project description' />
        </Form.Item>

        <Form.Item label="Start Date" name="startDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="End Date" name="endDate">
          <DatePicker />
        </Form.Item>

        
        <Form.Item label="Tags" name='tags'>
        <Input
            prefix={prefixTags}
            type="text"
            onChange ={({target}) =>
            setinputValue(target.value)} 
            onPressEnter={handleInputConfirm}
            allowClear
          />
        </Form.Item>

        <Form.Item name='checklist'>
          <Input value={[]} hidden/>
        </Form.Item>
        <Form.Item name='id'>
          <Input value={0} hidden/>
        </Form.Item>
        <Button type="primary"  htmlType="submit" > ADD  </Button>
      </Form>
    </>
  );
}
export default CreateProject;