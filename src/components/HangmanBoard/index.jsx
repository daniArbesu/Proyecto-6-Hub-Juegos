import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CHARACTERS } from '../../constants/hangman';
import { printWord, randomWord } from '../../utils/hangman';
import HangmanIcon from '../HangmanIcon';
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
  const [displayedWord, setDisplayedWord] = useState('');
  const wrongTries = useRef(0);

  const handleKeyPress = (character) => {
    const newLettersList = [...enteredLetters, character];
    const isInSelectedWord = selectedWord.split('').includes(character);
    setEnteredLetters(newLettersList);
    if (!isInSelectedWord) {
      wrongTries.current += 1;
      return;
    }
    setDisplayedWord(printWord(selectedWord, enteredLetters));
  };

  useEffect(() => {
    const newWord = randomWord();
    setSelectedWord(newWord);
  }, []);

  useEffect(() => {
    setDisplayedWord(printWord(selectedWord, enteredLetters));
  }, [selectedWord]);

  return (
    <HangmanBoardWrapper>
      <h2>Word: {displayedWord}</h2>
      <HangmanIcon wrongTries={wrongTries} />
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
