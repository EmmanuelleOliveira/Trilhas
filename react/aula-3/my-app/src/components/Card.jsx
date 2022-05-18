import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h1>24.03.2022</h1>
            <h3>Fortaleza-CE</h3>
            <span>{props.name}</span>
        </div>
    );
}

export default Card;