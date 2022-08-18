import React from 'react';

const ComParametro = (props) => {
    // props é somente leitura !!  
    // props.titulo = 'Outro valor'
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    );
}

// class ComParametro extends React.Component {
//     constructor(props) {
//         super(props)
//         this.titulo = 'Outro valor'
//     }
//     render() {
//         return (
//             <>
//                 <h3>{this.props.titulo}</h3>
//                 <p>{this.props.subtitulo}</p>
//             </>
//         )
//     }
// }

export default ComParametro;