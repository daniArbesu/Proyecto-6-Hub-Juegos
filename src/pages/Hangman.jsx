import { useState } from 'react';
import HangmanBoard from '../components/HangmanBoard';

function Hangman() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      <h2>Play Hangman</h2>
      <button type="button" onClick={() => setIsStarted(!isStarted)}>
        {isStarted ? 'End Game' : 'Start Game'}
      </button>
      {isStarted ? <HangmanBoard /> : null}
    </div>
  );
}

export default Hangman;
