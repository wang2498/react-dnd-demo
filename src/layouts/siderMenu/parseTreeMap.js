import React from 'react'
import { Menu } from 'antd';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import generateMenuItem from './generateMenuItem'
const { SubMenu } = Menu;
const loop = (data, callback) => (data || []).map((i, idx) => callback(i, idx));
export default function parseTreeMap(menuTreeMap) {

  const callback = item => {
    const { code } = item;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, drag] = useDrag({
      item: { type: 'menuItem', id: code },
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, drop] = useDrop({
      accept: 'menuItem',
      hover({ id }) {
        console.log(id, code);
     
      },
      drop(item) {
        console.log(item);
      }
    })
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          ref={ref => ref && ref.subMenuTitle && drag(drop(ref.subMenuTitle))}
          key={item.code} title={item.title} >
          {loop(item.children, callback)}
        </SubMenu>

      )
    }
    return generateMenuItem(item);
  }
  return loop(menuTreeMap, callback);
}