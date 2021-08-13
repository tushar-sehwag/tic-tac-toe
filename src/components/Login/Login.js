import React, { useState } from 'react';

import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';

import classes from './Login.module.css';

const Login = () => {

  const [ player1, setPlayer1 ] = useState("");
  const [ player2, setPlayer2 ] = useState("");
 
  const history = useHistory()

  function SubmitForm(event) {
    event.preventDefault();
    if (player1.trim() === "" || player2.trim() === "") {
      <Redirect to="/" />
    } else {

      history.push({
        pathname: "/dashboard",
        state: {
          props: {
            player1: player1,
            player2: player2,
            
          }
        }
      })
    }
  }

  return (
    
    <div className={classes.container}>
      <form onSubmit={SubmitForm}>
        <input
            placeholder="Enter Player 1 Name"
          name='player1'
          type='text'
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
          required
        />
        <input
        placeholder="Enter Player 2 Name"
          name='player2'
          type='text'
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
          required
        />

        <button type="submit" className={classes.button} value="Submit">Play Now!!</button>
      </form>
    </div>
  );
};

export default Login;