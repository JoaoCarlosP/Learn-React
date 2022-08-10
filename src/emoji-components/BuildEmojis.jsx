import React from 'react';

import EmojiArray from './EmojiArray'
import './Emojis.css'

function getEmojis() {
    return EmojiArray.map(emojiItem => {
        return (
            <>
                <input type='radio' name='radio-btn' id={emojiItem.id} className='input-radio' />
                <label for={emojiItem.id} className='emoji-label' >
                    {emojiItem.emoji}
                    {emojiItem.nameLabel}
                </label>
            </>
        )
    })
}

const BuildEmojis = (props) => {
    return (
        <div className='emoji-container'>
            {getEmojis()}
        </div>
    );
}

export default BuildEmojis;