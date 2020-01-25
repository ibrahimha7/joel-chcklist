import React, { Component } from 'react';

import Todos from '../Todos/Todos'
import CreateTodo from '../Todos/CreateTodo'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import Auth from '../Auth/Auth'
import Score from '../Score/Score'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Container extends Component {
    render() {
      return(
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>

        <div>
            <CreateTodo>

            </CreateTodo>

            <Score>

            </Score>

          </div>

          <div>

            <Auth>

            </Auth>
            <Login>

            </Login>

            <Register>

            </Register>

          </div>

          <Todos>

          </Todos>

          <Score>

          </Score>



        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
      )
    }
  }

  export default Container;