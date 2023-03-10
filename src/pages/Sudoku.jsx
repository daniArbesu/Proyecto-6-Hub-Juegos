import { useState } from 'react';
import { Link } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard';

function Sudoku() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <section>
      <article>
        <h2>Play Sudoku</h2>
        <Link to="/">Back</Link>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
        {isStarted ? <SudokuBoard /> : null}
      </article>
    </section>
  );
}

export default Sudoku;
