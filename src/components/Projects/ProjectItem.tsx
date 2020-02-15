import React, { useState } from 'react';
import { Drawer, List, Avatar, Divider, Col, Row,Tag,Button } from 'antd';



const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

// Property-renaming
const DescriptionItem = ( wholeObject: { title:any, content:any }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {wholeObject.title}:
    </p>
    {wholeObject.content}
  </div>
);

interface Props{
  visable?:boolean
}



const ProjectItem:React.FC<Props> = (visable)  =>  {

  const [value, setvalue] = useState()

  const showDrawer = () => {
    const setvalue = (true)
  };
   const onClose = () => {
    const setvalue=(false)
  };

      return(
            <div>
              <List
                dataSource={[
                  {
                    id:1,
                    name: 'Lily',
                  },
                  {
                    id:2,
                    name: 'Ahmad',
                  },
                  {
                    id:3,
                    name: 'Doe',
                  },
                ]}
                bordered
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Tag color="purple">Yousf</Tag>,
                      <Tag color="green">Easa</Tag>,
                      <a onClick={event => showDrawer} key={`a-${item.id}`}>
                        5/12 {'   '} {'   '}
                        <Button type="primary" icon="profile"  />
                      </a>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                      }
                      title={<a href="https://ant.design/index-cn">{item.name}</a>}
                      description="Progresser XTech"
                    />
                  </List.Item>
                )}
              />
              <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={onClose}
                visible = {value}
              >
                <h3>Joel Test Result</h3>
              </Drawer>
            </div>


        )
          
  
    }

  export default ProjectItem;
