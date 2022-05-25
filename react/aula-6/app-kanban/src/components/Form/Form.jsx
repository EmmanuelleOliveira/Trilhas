import React from 'react';
import {FormField, H2, Legend, Fieldset, Select, Input, Button, InputArea} from './style';

function Form(props) {
    return (
        <FormField>
            <H2>Cadastrar uma tarefa</H2>
            <InputArea>
            <Fieldset>
                <Legend>Sua tarefa</Legend>
                <Input type="text" value={props.task} onInput={(event) => props.setTask(event.target.value)}/>
            </Fieldset>
            <Fieldset>
                <Legend>Prazo</Legend>
                <Input type="datetime-local" value={props.deadline} onInput={(event) => props.setDeadline(event.target.value)}/>
            </Fieldset>
            <Fieldset>
                <Legend>Status</Legend>
                <Select className="status" value={props.status} onChange={(event) => props.setStatus(event.target.value)}>
                    <option value="todo">A Fazer</option>
                    <option value="doing">Fazendo</option>
                    <option value="done">Finalizado</option>
                </Select>
            </Fieldset>
            </InputArea>
            <Button type="button" onClick = {props.addData}>Inserir tarefas</Button>
        </FormField>
    )
}

export default Form;