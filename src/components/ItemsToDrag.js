import React from 'react'
import { useDrag } from 'react-dnd';


const ItemsToDrag = ({id, url, title, year}) => {
    const [{isDragging}, drag] = useDrag(() =>({
      type: "draggedItem",
      item:{id: id},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

  return (
      <React.Fragment>
      <div 
        ref={drag}
        key={id}
          style={{opacity:isDragging ? "0.5" : "1",
          border:'3px dashed gold',}}>
          <img src={url} width='100%' height='100%' />
      </div>
      <div style={{fontSize:'.8em',marginTop:'1em'}}>
          {title} {year}
    </div>
    </React.Fragment>
  )
}

export default ItemsToDrag
