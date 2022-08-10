import React from 'react';
import Sub from './Sub'

const Super = (props) => {

    function quandoClicar(valorGeradoComponenteFilho) {
        console.log('Ação!');
        console.log(valorGeradoComponenteFilho);
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub clique={quandoClicar}></Sub>
        </div>
    );
}

export default Super;