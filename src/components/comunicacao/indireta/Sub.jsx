import React from 'react';

const Sub = (props) => {
    return (
        // Quando clicar, irá passar para a função, localizada no componente pai, um valor gerado.
        <div>
            <button onClick={() => {
                props.clique(Math.random())
            }}>
                Alterar
            </button>
        </div>
    );
}

export default Sub;