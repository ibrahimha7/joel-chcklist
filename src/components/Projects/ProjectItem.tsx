import React, { Component } from 'react';
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

interface IProps {
}

interface IState {
  visible?:boolean
}


class ProjectItem extends Component <IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      visible: false,
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    
  



  render() { 
        
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
                      <Tag color="geekblue">geekblue</Tag>,
                      <Tag color="geekblue">geekblue</Tag>,
                      <a onClick={this.showDrawer} key={`a-${item.id}`}>
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
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <h3>Joel Test Result</h3>
              </Drawer>
            </div>


        )
          
  
    }
  }



  export default ProjectItem;
