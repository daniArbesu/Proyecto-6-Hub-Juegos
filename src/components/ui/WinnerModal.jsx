/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Modal = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #ffffff;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  top: 200px; // to see the board
`;

function WinnerModal({ text, resetGame, continueGame = null }) {
  const handleReset = () => {
    resetGame();
  };

  return (
    <Modal open>
      <h2>{text}</h2>
      <div>
        <button type="button" onClick={handleReset}>
          Restart Game
        </button>
        {continueGame ? (
          <button type="button" onClick={continueGame}>
            Correct your solution
          </button>
        ) : null}
      </div>
    </Modal>
  );
}

export default WinnerModal;
