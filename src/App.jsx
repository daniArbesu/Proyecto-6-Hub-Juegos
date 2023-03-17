import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import Hangman from './pages/Hangman';
import Sudoku from './pages/Sudoku';

function App() {
  return (
    <>
      <main className="App">
        <h1>Game Hub</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </main>
      <footer>
        <p>
          Creado por Daniel Arbesú, código en{' '}
          <a href="https://github.com/daniArbesu/Proyecto-6-Hub-Juegos">GitHub</a>
        </p>
      </footer>
    </>
  );
}

export default App;
