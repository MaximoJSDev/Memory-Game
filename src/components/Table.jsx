import { useEffect, useState } from "react";
import Card from "./Card";

function Table() {
  // Numero de cartas por dificultad (Cambiara con el menu)
  const [numCards, setNumCards] = useState(Array.from({ length: 8 }));
  // Cartas en Juego
  const [cards, setCards] = useState([]);
  // Pareja de cartas seleccionadas
  const [pairCards, setPairCards] = useState([]);

  const shuffleCards = () => {
    // Cartas aleatorias
    for (let i = 1; i < numCards.length + 1; i++) {
      setCards((current) =>
        [
          ...current,
          {
            id: i,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i * 3
            }.png`,
          },
          {
            id: i,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i * 3
            }.png`,
          },
        ].sort(() => 0.5 - Math.random())
      );
    }
  };

  useEffect(() => {
    //=== Al iniciar la app, barajea las cartas ===//
    setCards([]);
    shuffleCards();
  }, []);

  useEffect(() => {
    //=== Guarda las cartas seleccionadas y revisa si coinsiden ===//
    // Retorna si no se ha seleccionado ninguna carta
    if (pairCards.length === 0) return;
    // Verifica si las parejas se han seleccionado
    if (pairCards[0]?.id !== undefined && pairCards[1]?.id !== undefined) {
      // Si las parejas no coinsiden ocultalas
      if (pairCards[0].id !== pairCards[1].id) {
        setTimeout(() => {
          pairCards[0].element.classList.remove("showCard");
          pairCards[1].element.classList.remove("showCard");
        }, 900);
      }
      setPairCards([]); // Reinicia la pareja
    }
  }, [pairCards]);

  return (
    <div className="table">
      {cards.map((card, index) => (
        <Card key={index} card={card} setPairCards={setPairCards} />
      ))}
    </div>
  );
}

export default Table;
