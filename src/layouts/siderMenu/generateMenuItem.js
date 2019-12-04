import React from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { Menu } from 'antd';
const { Item } = Menu;
export default info => {
  const { code = '' } = info;
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'menuItem', id: code },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const [, drop] = useDrop({
    accept: 'menuItem',
    hover({ id }) {
      console.log(id, code);
      // if (draggedId !== id) {
      //   console.log(draggedId, id)
      //   const { index: overIndex } = findMenu(id)
      //   moveMenu(draggedId, overIndex)
      // }
    },
  })

  return (
    <Item
      ref={ref => ref && ref.node && drag(drop(ref.node))}
      key={info.code}>
      {/* <Link to={info.url} target={target || ''}> */}
      {info.title}
      {/* </Link> */}
    </Item>
  )
}