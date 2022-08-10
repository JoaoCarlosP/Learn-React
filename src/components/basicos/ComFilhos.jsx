import React from 'react';

const Filhos = (props) => {
    return (
        <div>
            <h3>Os filhos:</h3>
            <div>
                {props.children}
            </div>
        </div>
    );
}
 
export default Filhos;