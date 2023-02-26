import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PLAY_WORDS } from '../../constants/hangman';
import KeyboardRow from '../KeyboardRow';
import { HangmanBoardWrapper } from './styles';

const Keyboard = styled.section`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: fit-content;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin: 1rem 0;
  margin: 0 auto;
`;

const ENTERED_LETTERS_LIST = [];

function HangmanBoard() {
  const [selectedWord, setSelectedWord] = useState('');
  const [enteredLetter, setEnteredLetter] = useState('');

  const handleKeyPress = (character) => {
    if (ENTERED_LETTERS_LIST.includes(character)) {
      setEnteredLetter(`You pressed ${character} already`);
    } else {
      ENTERED_LETTERS_LIST.push(character);
      setEnteredLetter(`You pressed ${character}`);
    }
  };
  useEffect(() => {
    setSelectedWord(PLAY_WORDS[1]);
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
      <p>Press any letter on your keyboard</p>
      <p>
        Entered letters: {console.log(enteredLetter)}
        {ENTERED_LETTERS_LIST.map((letter) => `${letter} `)}
      </p>
      <Keyboard id="keyboard">
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters="abcdefghi"
          enteredList={ENTERED_LETTERS_LIST}
        />
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters="jklmnñopq"
          enteredList={ENTERED_LETTERS_LIST}
        />
        <KeyboardRow
          onClickLetter={handleKeyPress}
          characters="rstuvwxyz"
          enteredList={ENTERED_LETTERS_LIST}
        />
      </Keyboard>
    </HangmanBoardWrapper>
  );
}

export default HangmanBoard;
