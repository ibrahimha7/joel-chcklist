import React, { useState, useEffect } from 'react';
import { Typography,Table, Button, Form, Input } from 'antd';
import { useFirebase } from 'components/Firebase/FirebaseContext'


interface IProps {
    checklist?: {
        key: number
        text: string
    }
}

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

const columns = [
  {
    title: 'Checklist',
    dataIndex: 'text',
  },
];

const Checklist: React.FC = () => {
    const [checklistLengthValue, setchecklistLengthValue] = useState(0)
    const [selectedRowKey, setselectedRowKey] = useState()

    // console.log(checklist)
    // const checklistContent = [checklist]
    // console.log(checklistContent)
    const rowSelection = {
        onChange: (selectedRowKeys:any, selectedRows:any) => {
        //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        setchecklistLengthValue(selectedRows.length)
        setselectedRowKey(selectedRowKeys)
        },
      };

      const firebase = useFirebase();

      const onFinish = (values: any) => {
        
        values.score = checklistLengthValue
        values.keys = selectedRowKey
        console.log(values)
        firebase.projects().push(values, () => {
          console.log('add Score');
        })
      };

return (
    <>
        <h1>Joel Checklist</h1>
        <Table
            pagination={{ pageSize: 12 , disabled: true}}
            rowSelection={{
            type: 'checkbox',
            ...rowSelection,
            }}
            columns={columns}
            dataSource={checklistContent}
            size="small"
            
        />
        <Form layout={'vertical'}
        name="checklistScore"
        onFinish={onFinish}>
            <Form.Item label = 'SCORE' name="score">
                <h4> {checklistLengthValue}  </h4>
                <Input value = {checklistLengthValue} hidden />
            </Form.Item>
            <Form.Item  name="keys">
                <Input value = {selectedRowKey} hidden />
            </Form.Item>

            <Button type="primary"  htmlType="submit" > Save  </Button>
        </Form>
        
    </>
);

}
export default Checklist;