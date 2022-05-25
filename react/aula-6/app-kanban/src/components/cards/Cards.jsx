import React from 'react';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBinLine} from 'react-icons/ri';
import {CardTask, InfoTitle, IconsBtn} from './style';

function Cards(props) {
    return (
        <CardTask className='cardtask'>
            <div className="description">
            <InfoTitle>Descrição:</InfoTitle>
            <span>{props.task}</span>
            </div>
            <div className="deadline">
            <InfoTitle>Prazo:</InfoTitle>
            <span>{props.deadline}</span>
            </div>
            <IconsBtn>
                <GrEdit className='edit' onClick={()=>props.editTask(props.task, props.index, props.status, props.deadline)}></GrEdit>
                <RiDeleteBinLine className='delete' onClick={()=>props.deleteTask(props.index, props.status)}></RiDeleteBinLine>
            </IconsBtn> 
        </CardTask>
    );
}

export default Cards;