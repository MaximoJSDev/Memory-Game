import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1 className="title">Memory Game</h1>
        <button className="btn btn-menu">Back to Menu &gt;&gt;</button>
      </header>
      <div className="counter">
        <span>Movements: 4</span>
        <span>Timer: 1:20</span>
        <span>Remaining pairs: 4</span>
      </div>
      <Table />
    </main>
  );
}

export default App;
