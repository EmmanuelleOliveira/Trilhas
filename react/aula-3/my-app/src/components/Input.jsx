import React from 'react';

function Input() {
    return (
        <section className='form-field'>
            <div className='left-inputs'>
                <input type="text" id="input-description" placeholder='Descrição'/>
                <input type="date" id="input-date" placeholder='Data'/>
                <input type="text" id="input-location" placeholder='Local'/>
            </div>
            <div className='right-buttons'>
                <button id="btn-add" type="button">Adicionar</button>
                <button id="btn-clear" type="button">Limpar</button>
            </div>
        </section>
    );
}

export default Input;