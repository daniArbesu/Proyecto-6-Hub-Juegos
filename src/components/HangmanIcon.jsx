import styled from 'styled-components';
import { hangmanPaths } from '../constants/hangman';

const Icon = styled.svg`
  width: 100%;
  height: 48vh;
  fill: var(--light-color);
`;

function HangmanIcon() {
  return (
    <section>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="3300px"
        height="2550px"
        viewBox="0 0 3300 2550"
      >
        {hangmanPaths.map(({ d, transform }) => (
          <path d={d} transform={transform} />
        ))}
      </Icon>
    </section>
  );
}

export default HangmanIcon;
