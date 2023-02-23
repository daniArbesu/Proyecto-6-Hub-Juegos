import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Select a game</h1>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/tictactoe">Tic-Tac-Toe | </Link>
        <Link to="/hangman">Hangman | </Link>
        <Link to="/sudoku">Sudoku | </Link>
      </nav>
    </div>
  );
}

export default Home;
