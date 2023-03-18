/* eslint-disable react/prop-types */
function KeyboardRow({ characters, onClickLetter, enteredList }) {
  return (
    <>
      {characters.split('').map((character) => {
        const wasPressed = enteredList.includes(character);
        return (
          <button
            type="button"
            key={character}
            onClick={() => {
              onClickLetter(character);
            }}
            disabled={wasPressed}
          >
            {character}
          </button>
        );
      })}
    </>
  );
}

export default KeyboardRow;
