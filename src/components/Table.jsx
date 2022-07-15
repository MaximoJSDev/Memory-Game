import { useEffect, useState } from "react";
import Card from "./Card";

function Table({
  setNumCards,
  numCards,
  setMovements,
  movements,
  setRemainingPairs,
  remainingPairs,
}) {
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
      setMovements(movements + 1);
      // Si las parejas no coinsiden ocultalas
      if (pairCards[0].id !== pairCards[1].id) {
        setTimeout(() => {
          pairCards[0].element.classList.remove("showCard");
          pairCards[1].element.classList.remove("showCard");
        }, 900);
      } else {
        setRemainingPairs(remainingPairs - 1);
      }
      setPairCards([]); // Reinicia la pareja
    }
  }, [pairCards]);

  useEffect(() => {
    // Alerta de victoria cuando no queden pares restantes
    if (remainingPairs === 0) {
      alert("You Wins");
      setNumCards([]);
    }
  }, [remainingPairs]);

  const getDifficulty = (cards) => {
    if (cards === 8) return "facil";
    if (cards === 12) return "normal";
    if (cards === 15) return "dificil";
  };

  return (
    <div className={`table ${getDifficulty(numCards.length)}`}>
      {cards.map((card, index) => (
        <Card key={index} card={card} setPairCards={setPairCards} />
      ))}
    </div>
  );
}

export default Table;
