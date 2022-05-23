import React, {useState} from 'react';
import Form from './Form';
import Cards from './Cards';

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
        if(status === 'todo') {
            deleteTask(index, status);
        } else if (status === 'doing') {
            deleteTask(index, status);
        } else {
            deleteTask(index, status);
        } 
    }

    function deleteTask(index, status) {
        console.log(index)
        if(status === 'todo') {
            let removeTask = doCards.filter((t,i) => i !== index)
            setDoCards(removeTask);
        }  else if (status === 'doing') {
            let removeTask = doingCards.filter((t,i) => i !== index)
            setDoingCards(removeTask);
        } else {
            let removeTask = doneCards.filter((t,i) => i !== index)
            setDoneCards(removeTask);
        } 
    }

    return (
        <main>
            <Form 
                task = {task} deadline = {deadline} status = {status}
                setTask = {setTask} setDeadline = {setDeadline} setStatus = {setStatus}
                addData = {addData} 
            >
            </Form>
            <section>
                <h2>Quadro de tarefas</h2>
                <div className='tasks'>
                    <div className='red-cards'>
                        <div className='to-do'>A Fazer</div>
                        {doCards.map((card,index) => <Cards key={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </div>
                    <div className='yellow-cards'>
                        <div className='doing'>Fazendo</div>
                        {doingCards.map((card,index) => <Cards key={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </div>
                    <div className='green-cards'>
                        <div className='done'>Finalizado</div>
                        {doneCards.map((card,index) => <Cards key={index} task={card.task} deadline={card.deadline} status={card.status} deleteTask={deleteTask} editTask={editTask}></Cards>)}
                    </div>
                </div> 
            </section>
        </main>
    )
}

export default Main;
