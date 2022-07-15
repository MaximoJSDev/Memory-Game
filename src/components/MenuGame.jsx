function MenuGame({ setNumCards }) {
  return (
    <div className="selectDifficulty">
      <h2>Select difficulty:</h2>
      <h3 onClick={() => setNumCards(Array.from({ length: 8 }))}>Easy</h3>
      <h3 onClick={() => setNumCards(Array.from({ length: 12 }))}>
        Intermediate
      </h3>
      <h3 onClick={() => setNumCards(Array.from({ length: 15 }))}>Hard</h3>
    </div>
  );
}

export default MenuGame;
