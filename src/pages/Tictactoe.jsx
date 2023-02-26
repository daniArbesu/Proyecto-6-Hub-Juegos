import { useState } from 'react';
import { Link } from 'react-router-dom';
import TTTBoard from '../components/TTTBoard';

function Tictactoe() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="tiktaktoe">
      <div className="tiktaktoe-header">
        <h2>Play Tic-Tac-Toe</h2>
        <Link to="/">Back</Link>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
        {isStarted ? <TTTBoard /> : null}
      </div>
    </div>
  );
}

export default Tictactoe;
