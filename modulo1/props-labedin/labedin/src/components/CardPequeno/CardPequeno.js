import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.descricao }</h4>
                <p>{ props.dados }</p>
            </div>
        </div>
    )
}

export default CardPequeno;