/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Modal = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #ffffffe2;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
`;

function WinnerModal({ winner, resetGame }) {
  const text = winner === 'draw' ? "There's a draw :(" : `Player ${winner} won!!`;

  const handleReset = () => {
    resetGame();
  };

  return (
    <Modal open>
      <h2>{text}</h2>
      <button type="button" onClick={handleReset}>
        Restart Game
      </button>
    </Modal>
  );
}

export default WinnerModal;
