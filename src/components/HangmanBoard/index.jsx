import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CHARACTERS, PLAY_WORDS } from '../../constants/hangman';
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
`;

const ENTERED_LETTERS_LIST = [];

function HangmanBoard() {
  // TODO: change selectedWord with a ref
  const [selectedWord, setSelectedWord] = useState('');
  const [enteredLetter, setEnteredLetter] = useState('');

  const handleKeyPress = (character) => {
    ENTERED_LETTERS_LIST.push(character);
    setEnteredLetter(`You pressed ${character}`);
  };
  useEffect(() => {
    const newWord = randomWord();
    setSelectedWord(newWord);

    return () => {
      // setEnteredLetter('');
    };
  }, []);

  useEffect(() => {}, [enteredLetter]);

  const printWord = () => {
    let displayWords = '';
    for (const letter of selectedWord) {
      if (ENTERED_LETTERS_LIST.includes(letter)) {
        displayWords += `${letter} `;
      } else {
        displayWords += '_ ';
      }
    }
    return displayWords;
  };

  return (
    <HangmanBoardWrapper>
      <h2>Word: {printWord()}</h2>
      <h3>{enteredLetter}</h3>
      <p>Entered letters: {ENTERED_LETTERS_LIST.map((letter) => `${letter} `)}</p>
      <Keyboard id="keyboard">
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters={CHARACTERS}
          enteredList={ENTERED_LETTERS_LIST}
        />
      </Keyboard>
    </HangmanBoardWrapper>
  );
}

export default HangmanBoard;
