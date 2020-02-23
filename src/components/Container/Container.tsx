import React from 'react';
import ProjectsContainer from './ProjectsContainer'
import Practies from './Practies'
import { Layout,Breadcrumb,Icon } from 'antd';

const { Header, Content, Footer } = Layout;

const Container:React.FC = () => {
  

    return (
      <Layout>
        <Header className="header" >

        <div className="logo" />
          
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item> <Icon type="home" /> <a href="/"> Home </a></Breadcrumb.Item>
            <Breadcrumb.Item> <a href="/login"> Login </a> </Breadcrumb.Item>
            <Breadcrumb.Item> <a href="/register"> Register </a> </Breadcrumb.Item>
            <Breadcrumb.Item> </Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <div>
            
              <Practies />
              <ProjectsContainer />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
export default Container;