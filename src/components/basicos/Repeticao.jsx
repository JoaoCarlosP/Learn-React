import React from 'react';

import '../../data/products'
import Produtos from '../../data/products';

function getProdutoListItem() {

    return Produtos.map(item => {
        return (
            <li key={item.id}>
                {item.id} - {item.name} - R$ {item.price}
            </li>
        )
    })
}

const Repeticao = (props) => {

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutoListItem()}
            </ul>
        </div>
    );
}
 
export default Repeticao;