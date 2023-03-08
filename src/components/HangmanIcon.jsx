/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { hangmanPaths } from '../constants/hangman';

const Icon = styled.svg`
  width: 100%;
  height: 30vh;
  fill: var(--light-color);
`;

function HangmanIcon({ wrongTries }) {
  return (
    <section>
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3300 2550">
        {hangmanPaths.slice(0, wrongTries.current).map(({ d, transform }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <path d={d} transform={transform} key={index} />
        ))}
      </Icon>
    </section>
  );
}

export default HangmanIcon;
