import React, { useState } from 'react';
import Sub from './Sub'

const Super = (props) => {

    const[valor, setValor] = useState(0)
    const[texto, setTexto] = useState('Valor')

    const quandoClicar = (valorGeradoComponenteFilho, textGeradoComponentFilho) => {
        setValor(valorGeradoComponenteFilho)
        setTexto(textGeradoComponentFilho)
    }

    return (
        <div>
            <h4>{texto}: {valor}</h4>
            <Sub clique={quandoClicar}></Sub>
        </div>
    );
}

export default Super;