import React from 'react';

const List = ({text ,link , links , setLinks}) => {
    const deleteHandler = () => { 
        setLinks(links.filter(ele => ele.id !== link.id))
    }

    const completeHandler = () => {
        setLinks(links.map((item) => {
            if(link.id === item.id) {
                return {
                    ...item,completed : !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i  className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default List;