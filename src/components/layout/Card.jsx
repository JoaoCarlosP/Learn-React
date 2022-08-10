import React from 'react';

const Card = (props) => {
    return (

        <div className='card'
            style={{borderColor: props.color || '#000'}}
        >

            <div className='conteudo'>
                {props.children}
            </div>

            <div
                className='footer'
                style={{backgroundColor: props.color || '#000'}}
            >
                {props.titulo}
            </div>

        </div>
    )
}

export default Card;
 