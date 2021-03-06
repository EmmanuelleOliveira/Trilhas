import React, {useState} from 'react';
import Form from '../Form/Form';
import Cards from '../cards/Cards';
/* import {MainStyle, H2} from './style' */
import {MainStyle, H2, TasksContainer, TasksName, CardsContainer} from './style'

function Main() {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState('todo');
    const [doCards, setDoCards] = useState([]);
    const [doingCards, setDoingCards] = useState([]);
    const [doneCards, setDoneCards] = useState([]);

    function addData() {
        const newCard = { //Forma o novo card
            task: task,
            deadline: deadline,
            status: status
        }
        if(newCard.status === 'todo') {
            let cardsAux = doCards;
            doCards.push(newCard);
            setDoCards(cardsAux);
            clearForm();
        } else if (newCard.status === 'doing') {
            let cardsAux = doingCards;
            doingCards.push(newCard);
            setDoingCards(cardsAux);
            clearForm();
        } else {
            let cardsAux = doneCards;
            doneCards.push(newCard);
            setDoneCards(cardsAux);
            clearForm();
        }
    }

    function clearForm() {
        setTask("");
        setDeadline("");
        setStatus("todo");
    }

    function editTask(task, index, status, deadline){
        setTask(task);
        setDeadline(deadline);
        setStatus(status);
        console.log(status, index);
        deleteTask(index, status);
    }

    function deleteTask(ind, st) {
        console.log(ind, st)
        if(st === 'todo') {
            let removeTask = doCards.filter((t,i) => i !== ind)
            setDoCards(removeTask);
        }  else if (st === 'doing') {
            let removeTask = doingCards.filter((t,i) => i !== ind)
            setDoingCards(removeTask);
        } else {
            let removeTask = doneCards.filter((t,i) => i !== ind)
            setDoneCards(removeTask);
        } 
    }

    return (
        <MainStyle>
            <Form 
                task = {task} deadline = {deadline} status = {status}
                setTask = {setTask} setDeadline = {setDeadline} setStatus = {setStatus}
                addData = {addData} 
            >
            </Form>
            <section>
                <H2>Quadro de tarefas</H2>
                <TasksContainer>
                    <CardsContainer redcards>
                        <TasksName todo>A Fazer</TasksName>
                        {doCards.map((card,index) => <Cards key={index} index={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </CardsContainer>
                    <CardsContainer yellowcards>
                        <TasksName doing>Fazendo</TasksName>
                        {doingCards.map((card,index) => <Cards key={index} index={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </CardsContainer>
                    <CardsContainer greencards>
                        <TasksName done>Finalizado</TasksName>
                        {doneCards.map((card,index) => <Cards key={index} index={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </CardsContainer>
                </TasksContainer> 
            </section>
        </MainStyle>
    )
}

export default Main;
