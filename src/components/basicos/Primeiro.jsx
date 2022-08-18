import React from 'react';

// function Primeiro(props) {
//     return (
//         <>
//             <h1>Primeiro Componente (Arrow)</h1>
//             <h2>Exemplo de componente react JSX</h2>
//         </>
//     );
// }

class Primeiro extends React.Component{

    render () {
        return (
            <div>
                <h1>Primeiro Componente</h1>
                <h2>Exemplo de componente react JSX</h2>
            </div>
        ) 
    }

}

export default Primeiro;