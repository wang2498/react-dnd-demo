import React from 'react'
import { Menu } from 'antd'
import menuItem from './menuItem'
import menuList from './utils/menuList'
export default () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      {menuList.map(info => (
        menuItem({
          info
        })
      ))}
    </Menu>
  )
}