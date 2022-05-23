import React from 'react';

function Form(props) {
    return (
        <section className = 'form-field'>
            <h2>Cadastrar uma tarefa</h2>
            <div className = "input">
            <fieldset>
                <legend>Sua tarefa</legend>
                <input type="text" value={props.task} onInput={(event) => props.setTask(event.target.value)}/>
            </fieldset>
            <fieldset>
                <legend>Prazo</legend>
                <input type="datetime-local" value={props.deadline} onInput={(event) => props.setDeadline(event.target.value)}/>
            </fieldset>
            <fieldset>
                <legend>Status</legend>
                <select className="status" value={props.status} onChange={(event) => props.setStatus(event.target.value)}>
                    <option value="todo">A Fazer</option>
                    <option value="doing">Fazendo</option>
                    <option value="done">Finalizado</option>
                </select>
            </fieldset>
            </div>
            <button type="button" className = "btn-insert-task" onClick = {props.addData}>Inserir tarefas</button>
        </section>
    )
}

export default Form;