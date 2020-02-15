import React, { useState } from 'react';
import { Drawer, List, Avatar, Button ,Tag } from 'antd';

import { DrawerProps } from 'antd/es/drawer'


// const pStyle = {
//   fontSize: 16,
//   color: 'rgba(0,0,0,0.85)',
//   lineHeight: '24px',
//   display: 'block',
//   marginBottom: 16,
// };

// Property-renaming

// const DescriptionItem = ( wholeObject: { title:any, content:any }) => (
//   <div
//     style={{
//       fontSize: 14,
//       lineHeight: '22px',
//       marginBottom: 7,
//       color: 'rgba(0,0,0,0.65)',
//     }}
//   >
//     <p
//       style={{
//         marginRight: 8,
//         display: 'inline-block',
//         color: 'rgba(0,0,0,0.85)',
//       }}
//     >
//       {wholeObject.title}:
//     </p>
//     {wholeObject.content}
//   </div>
// );

interface Props extends DrawerProps{
  
}



const ProjectItem:React.FC<Props> = ()  =>  {

  const [value, setValue] = useState()

  const showDrawer = () => {
    setValue(true)
    
  };
   const onClose = () => {
    setValue(false)
  };

      return(
            <div>
              <h1>Project List </h1>
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
                      <a style={{marginLeft:'1.5rem'}}  onClick={showDrawer} key={`a-${item.id}`}>
                        5/12 
                        <Button type="primary" icon="profile" style={{marginLeft:'3rem'}} />
                      </a>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                      }
                      title={<a href="https://ant.design/index-cn">{item.name}</a>}
                      description={<p >Progresser XTech</p>}
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
