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

// class Filhos extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Os filhos:</h3>
//                 <div>
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }

export default Filhos;