import React from 'react';
import Input from './Input';
import Card from './Card';

function Main() {
    return(
        <>
            <Input></Input>
            <section className='calendar'>
                <Card name='Encontro com o Alpha'></Card>
                <Card name='Reunião DM'></Card>
                <Card name='Aula Faculdade'></Card>
            </section>
        </>
    );
}

export default Main;