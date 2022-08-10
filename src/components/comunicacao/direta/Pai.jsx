import React from 'react';
import Filho from './Filho'

const Pai = (props) => {
    return (
        <div>
            {/* //Pega todas as propriedades que recebeu e passa para o filho*/}
            <Filho {...props}>João</Filho>

            {/* Pega diretamente a propriedade de props*/}
            <Filho sobrenome={props.sobrenome}>Maria</Filho>

            {/* Passa a props aqui memso */}
            <Filho sobrenome="Silva">Pedro</Filho>
        </div>
    );
}
 
export default Pai;