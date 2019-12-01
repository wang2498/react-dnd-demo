import React
  from 'react'
import { Menu } from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom'
const { Item } = Menu;
export default ({ info }) => {
  const [, drag] = useDrag({
    item: { type: 'item' }
  })
  const [, drop] = useDrop({
    accept: 'item',
    canDrop: () => false,
    hover({ id: draggedId }) {
      // if (draggedId !== id) {
      //   const { index: overIndex } = findCard(id)
      //   moveCard(draggedId, overIndex)
      // }
    },
  })
  return (
    <Item
      key={info.key}
      ref={ref => drag(drop(ref.node))}
      style={{}}
    >
      <Link to={info.path}>{info.title}</Link>
    </Item>
  )
}