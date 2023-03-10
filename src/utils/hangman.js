import { PLAY_WORDS } from '../constants/hangman';

export const randomWord = () => {
  const randomNumber = Math.floor(Math.random() * PLAY_WORDS.length);
  return PLAY_WORDS[randomNumber];
};

export const checkWordComplete = (displayedWord) => {
  const isCompleted = !displayedWord.includes('_');
  return isCompleted;
};

export const printWord = (selectedWord, enteredLetters) => {
  if (selectedWord === '') return null;

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
