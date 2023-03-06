import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CHARACTERS } from '../../constants/hangman';
import randomWord from '../../utils/hangman';
import KeyboardRow from '../KeyboardRow';
import { HangmanBoardWrapper } from './styles';

const Keyboard = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: fit-content;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin: 1rem 0;
  margin: 0 auto;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

function HangmanBoard() {
  const [selectedWord, setSelectedWord] = useState('');
  const [enteredLetters, setEnteredLetters] = useState([]);

  const handleKeyPress = (character) => {
    const newLettersList = [...enteredLetters, character];
    setEnteredLetters(newLettersList);
  };

  useEffect(() => {
    const newWord = randomWord();
    setSelectedWord(newWord);
  }, []);

  useEffect(() => {}, [enteredLetters]);

  const printWord = () => {
    let displayWords = '';
    selectedWord.split('').forEach((letter) => {
      if (enteredLetters.includes(letter)) {
        displayWords += `${letter} `;
      } else {
        displayWords += '_ ';
      }
    });

    return displayWords;
  };

  return (
    <HangmanBoardWrapper>
      <h2>Word: {printWord()}</h2>
      <Keyboard id="keyboard">
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters={CHARACTERS}
          enteredList={enteredLetters}
        />
      </Keyboard>
    </HangmanBoardWrapper>
  );
}

export default HangmanBoard;
