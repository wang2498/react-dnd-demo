import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend'
import Header from './header'
import SiderMenu from './siderMenu'
const { Content, Footer } = Layout;

export default props => {
  return (
    <Layout className="layout">
      <Header />
      <Layout >
       <DndProvider backend={HTMLBackend}>  <SiderMenu /></DndProvider>
        <Content style={{ padding: '0 15px' }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            {props.children}
          </div>
          <Footer style={{ textAlign: 'center' }}>Demo Created by wang2498</Footer>
        </Content>
      </Layout>
    </Layout>
  )
}