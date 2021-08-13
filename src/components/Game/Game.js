import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import Board from './Board';
import { calculateWinner } from './calculateWinner';
import classes from './Game.module.css';

const Game = ({location}) => {
    
    const [ player1, setPlayer1 ] = useState("");
    const [ player2, setPlayer2 ] = useState("");
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber], player1, player2);
    const xo = xIsNext ? "X" : "O" ;

   
    const playerTurn=(stepNumber%2===0)? player1 :player2;

    useEffect(() => {
        let { player1, player2 } = location.state.props;
        
        setPlayer1(player1)
        setPlayer2(player2)
      }, [ location ])

    const jumpTo = (step) => {
        setStepNumber(step);
    };

    useEffect(() => {
        if (winner || stepNumber === 8) {
            setTimeout(() => {
                jumpTo(0);
            }, 3000)
        }
    }, [winner, stepNumber])

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const boardItems = [...current];
        if (winner || boardItems[i]) { return };

        boardItems[i] = xo;
        setHistory([...historyPoint, boardItems]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    }
    const resetGame=()=>{
        setStepNumber(0);
        setHistory([Array(9).fill(null)]);
    }

    return (
        <React.Fragment>
            <Board boardItems={history[stepNumber]} onClick={handleClick} />
            <div className={classes.info}>
                <h3 className={classes.result}>
                    {winner ? ("Winner " + winner) : stepNumber !== 9 ? ("Next Player is " + playerTurn) : ("Game Ends in Draw")}
                </h3>
                <button className={classes.button} onClick={resetGame}>Reset</button>
                <Link to='/' className={classes.button} >Logout</Link>
            </div>

        </React.Fragment>
    )
}

export default Game;
