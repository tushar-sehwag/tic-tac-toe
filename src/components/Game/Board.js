import React from 'react';

import styles from './Board.module.css';
import BoardItem from './BoardItem';

const Board = ({boardItems, onClick }) => {
    return (
        <div className={styles.center}>
        <div className={styles.board}>
            {boardItems.map((boardItem, i) => (
                <BoardItem key={i} value={boardItem} onClick={()=> onClick(i)}/>
            ))}
        </div>
        </div>
    )
}

export default Board;
