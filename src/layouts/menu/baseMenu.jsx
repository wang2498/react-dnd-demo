import React, { useState } from 'react'
import { Menu } from 'antd'
import menuItem from './menuItem'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import menuList from './utils/menuList'
export default () => {
  const [menuData, setMenuData] = useState(menuList);

  const findMenu = key => {
    const menu = menuData.filter(i => i.id === key)[0]
    return {
      menu,
      index: menuData.indexOf(menu),
    }
  }

  const moveMenu = (id, atIndex) => {
    const { menu, index } = findMenu(id);
    const newMenuData = update(menuData, {
      $splice: [
        [index, 1],
        [atIndex, 0, menu],
      ],
    })
    setMenuData(newMenuData)
  }
  const [, drop] = useDrop({ accept: 'item' })
  return (
    <div ref={drop}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        {menuData.map(info => (
          menuItem({
            info,
            moveMenu,
            findMenu
          })
        ))}
      </Menu>
    </div>

  )
}