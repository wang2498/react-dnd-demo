import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import update from 'immutability-helper'

import treeMenuData from './_menuMock'
import parseTreeMap from './parseTreeMap'

const { Sider } = Layout;

export default () => {
  const menuOptions = parseTreeMap(treeMenuData);
  return (
    <Sider theme='light'>
    
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['code_0']}
        style={{ lineHeight: '64px' }}
      >
        {menuOptions}
      </Menu>
    </Sider>
  )
}