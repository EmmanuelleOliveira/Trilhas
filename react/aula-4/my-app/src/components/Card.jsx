import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h1>{props.date}</h1>
            <h3>{props.local}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Card;