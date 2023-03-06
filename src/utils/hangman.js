import { PLAY_WORDS } from '../constants/hangman';

const randomWord = () => {
  const randomNumber = Math.floor(Math.random() * PLAY_WORDS.length);
  return PLAY_WORDS[randomNumber];
};

export default randomWord;
