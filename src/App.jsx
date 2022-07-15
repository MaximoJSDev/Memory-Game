import { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Header from "./components/Header";
import MenuGame from "./components/MenuGame";
import Table from "./components/Table";

function App() {
  // Numero de cartas por dificultad (Cambiara con el menu)
  const [numCards, setNumCards] = useState([]);
  const [movements, setMovements] = useState(0);
  const [remainingPairs, setRemainingPairs] = useState(0);

  return (
    <main className="App">
      <Header setNumCards={setNumCards} />
      {numCards.length == 0 ? (
        <MenuGame
          setNumCards={setNumCards}
          setRemainingPairs={setRemainingPairs}
        />
      ) : (
        <>
          <Counters movements={movements} remainingPairs={remainingPairs} />
          <Table
            setNumCards={setNumCards}
            numCards={numCards}
            setMovements={setMovements}
            movements={movements}
            setRemainingPairs={setRemainingPairs}
            remainingPairs={remainingPairs}
          />
        </>
      )}
    </main>
  );
}

export default App;
