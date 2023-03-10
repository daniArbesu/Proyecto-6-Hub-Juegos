import { useState } from 'react';
import styled from 'styled-components';
import SudokuBoard from '../components/SudokuBoard';

const SudokuPageWrapper = styled.section`
  display: flex;
  text-align: ;
  max-width: 400px;
`;

function Sudoku() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <SudokuPageWrapper>
      <article>
        <h2>Play Sudoku</h2>
        <button type="button" onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
        {isStarted ? <SudokuBoard /> : null}
      </article>
    </SudokuPageWrapper>
  );
}

export default Sudoku;
