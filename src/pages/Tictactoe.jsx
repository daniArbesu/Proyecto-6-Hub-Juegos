import { Link } from 'react-router-dom';
import TTTBoard from '../components/TTTBoard';

function Tictactoe() {
  return (
    <section>
      <div className="tiktaktoe-header">
        <h2>Play Tic-Tac-Toe</h2>
        <Link to="/">Home</Link>
        <TTTBoard />
      </div>
    </section>
  );
}

export default Tictactoe;
