import React
  from 'react'
import { Menu } from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom'
const { Item } = Menu;
export default ({ info, info: { id }, moveMenu, findMenu }) => {
  const originalIndex = findMenu(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'item', id: id, originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findMenu(id)
        moveMenu(draggedId, overIndex)
      }
    },
    collect: minoter => ({
      isOver: minoter.isOver()
    })
  })
  const dropItemStyle = isOver && {
    background: 'pink'
  }
  return (
    <Item
      key={info.key}
      ref={ref => ref && ref.node && drag(drop(ref.node))}
      style={{ ...dropItemStyle }}
    >
      <Link to={info.path}>{info.title}</Link>
    </Item>
  )
}