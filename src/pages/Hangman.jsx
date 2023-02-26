import { useState } from 'react';
import { Link } from 'react-router-dom';
import HangmanBoard from '../components/HangmanBoard';

function Hangman() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      <h2>Play Hangman</h2>
      <Link to="/">Back</Link>
      <button type="button" onClick={() => setIsStarted(!isStarted)}>
        {isStarted ? 'End Game' : 'Start Game'}
      </button>
      {isStarted ? <HangmanBoard /> : null}
    </div>
  );
}

export default Hangman;
