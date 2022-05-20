import React from 'react';

function Input(props) {
    return (
        <section className='form-field'>
            <div className='left-inputs'>
                <input type="text" className="input-description" placeholder='Descrição' value={props.description} onInput={(event) => props.setDescription(event.target.value)}/>
                <input type="date" className="input-date" placeholder='Data' value={props.date} onInput={(event) => props.setDate(event.target.value)} />
                <input type="text" className="input-local" placeholder='Local' value={props.local} onInput={(event) => props.setLocal(event.target.value)} />
            </div>
            <div className='right-buttons'>
                <button className="btn-add" type="button" onClick={props.addData}>Adicionar</button>
                <button className="btn-clear" type="button" onClick={props.clearInput}>Limpar</button>
            </div>
        </section>
    );
}

export default Input;