import React from 'react'
import { Layout, Icon } from 'antd';
import RightContent from './rightCentent';
import BaseMenu from './headerMenu/baseMenu';
import styles from './header.module.css';
import { DndProvider } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend'
const { Header } = Layout;
export default () => {

  return (
    <Header className={styles.head}>
      <div className={styles.left}>
        <Icon type="home" style={{ marginRight: 10 }} />
        <span>react-dnd-demo</span>
      </div>
      <div className={styles.headerContent}>
        <DndProvider backend={HTMLBackend}>
          <BaseMenu />
        </DndProvider>
      </div>
      <div className={styles.right}>
        <RightContent />
      </div>
    </Header>
  )
}