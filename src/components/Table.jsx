import { useEffect, useState } from "react";
import Card from "./Card";

function Table() {
  const [numCards, setNumCards] = useState(Array.from({ length: 8 }));
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    for (let i = 0; i < numCards.length; i++) {
      setCards((current) =>
        [
          ...current,
          {
            id: i,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 4
            }.png`,
            stat: "",
          },
          {
            id: i,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 4
            }.png`,
            stat: "",
          },
        ].sort(() => Math.random() - 0.5)
      );
    }
  };

  useEffect(() => {
    setCards([]);
    shuffleCards();
  }, []);

  return (
    <div className="table">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default Table;
