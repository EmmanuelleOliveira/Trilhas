import React from 'react';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBinLine} from 'react-icons/ri';

function Cards(props) {
    console.log("card")
    console.log(props)
    return (
        <div className='card-task'>
            <div className="description">
            <p>Descrição:</p>
            <span>{props.task}</span>
            </div>
            <div className="deadline">
            <p>Prazo:</p>
            <span>{props.deadline}</span>
            </div>
            <div className="btn-icons">
                <GrEdit className='edit' onClick={()=>props.editTask(props.task ,props.index, props.status, props.deadline)}></GrEdit>
                <RiDeleteBinLine className='delete' onClick={()=>props.deleteTask(props.index, props.status)}></RiDeleteBinLine>
            </div> 
        </div>
    );
}

export default Cards;