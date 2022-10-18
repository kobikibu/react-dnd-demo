import React from 'react';
import ItemsToDrag from './ItemsToDrag';
import { useDrop } from "react-dnd";


const ItemsToDragList = [
    {
        id:1,
        url: "self-portrait-1628.jpg",
        title:'Self-portrait',
        year:'(1629)',
    },
    {
        id:2,
        url:"self-portrait-1655.jpg",
        title:'Self-portrait',
        year:'(1655)',
    },
    {
        id:3,
        url:"self-portrait-1669.jpg",
        title:'Self-portrait',
        year:'(1669)',
    },
];

const DragAndDrop = () => {
    
    const[dropArea, setDropArea] = React.useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "draggedItem",
        drop:(item) => addDraggedItemToDropArea(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addDraggedItemToDropArea = (id) => {
        const listOfPaintings = ItemsToDragList.filter((itemToDrag) => id === itemToDrag.id);
        
        // Every new drop adds to the dropArea
        //setDropArea((dropArea) => [...dropArea, listOfPaintings[0]]);
        
        // Replace previous dropped item once dropped new one
        setDropArea([listOfPaintings[0]]);

    };

    return(
        <React.Fragment>
            <div className="container">
            <h2>* Drag & Drop &nbsp;&nbsp;&nbsp;⇘</h2>
                <div className="drags">
                        {ItemsToDragList.map((itemToDrag) => {
                            return(
                                <ItemsToDrag url={itemToDrag.url} id={itemToDrag.id}/>
                            );
                        })}
                </div>
                <div className="drops" ref={drop}>
                    <p className="dropMeHere">Drop me here</p>
                    {dropArea.map((itemToDrag) => {
                        return(
                            <ItemsToDrag url={itemToDrag.url} id={itemToDrag.id} title={itemToDrag.title} 
                            year={itemToDrag.year} />
                        );  
                    })}
                </div>
                <div style={{ fontSize:'.8em',paddingTop:'2.8em' }}>
                    Rembrandt (1606-1669)
                </div>
                <div style={{ fontSize:'.5em'}}>Dutch painter</div>
            </div>
        </React.Fragment>
    );
}

export default DragAndDrop;
