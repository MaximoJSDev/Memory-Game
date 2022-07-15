function MenuGame({ setNumCards, setRemainingPairs }) {
  const handleMenu = (num) => {
    setNumCards(Array.from({ length: num }));
    setRemainingPairs(num);
  };

  return (
    <div className="selectDifficulty">
      <h2>Select difficulty:</h2>
      <h3 onClick={() => handleMenu(8)}>Easy</h3>
      <h3 onClick={() => handleMenu(12)}>Intermediate</h3>
      <h3 onClick={() => handleMenu(15)}>Hard</h3>
    </div>
  );
}

export default MenuGame;
