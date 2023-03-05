import { PLAY_WORDS } from '../constants/hangman';

const randomWord = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return PLAY_WORDS[randomNumber];
};

export default randomWord;
