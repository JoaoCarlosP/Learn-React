import React from 'react';

const Condicional = (props) => {
    return (
        <div>
            <h2>O número {props.numero} é:</h2>
            {props.numero % 2 !== 0 ? <span>Ímpar</span> : <span>Par</span>}
        </div>
    );
}
 
export default Condicional;