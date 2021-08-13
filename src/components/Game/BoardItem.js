import React from 'react';

const BoardItem = ({value,onClick}) => {
    
    const buttonStyle= value ? `buttonClass ${value}` : `buttonClass`;
    
    return (
        <button onClick={onClick} className={buttonStyle}>
            {value}
        </button>
    )
}

export default BoardItem
