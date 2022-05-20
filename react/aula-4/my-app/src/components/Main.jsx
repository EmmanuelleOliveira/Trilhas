import React, {useState} from "react";
import Input from './Input';
import Card from './Card';

function Main() {
    //Valores atuais dos inputs
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [local, setLocal] = useState("");
    //Dados atuais de todos os inputs formam um card
    const [cards, setCards] = useState([]);

    function addData() { 
        let cardsAux = cards; //Vetor auxiliar que armazena os cards antes de armazenar mais um 
        const newCard = { //Forma o novo card
            description: description,
            date: date,
            local: local
        }
        cardsAux.push(newCard); 
        setCards(cardsAux);
        clearInput();
    }

    function clearInput() {
        setDescription("");
        setDate("");
        setLocal("");
    }

    return(
        <>
            <Input 
                description={description} date={date} local={local}
                setDescription={setDescription} setDate={setDate} setLocal={setLocal}
                addData={addData} clearInput={clearInput}
            ></Input>
            <section className='calendar'>
                {cards.map((card,index) => <Card key={index} description={card.description} date={card.date} local={card.local}></Card>)}
            </section>
        </>
    );
}

export default Main;