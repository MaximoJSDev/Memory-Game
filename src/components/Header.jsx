function Header({ setNumCards }) {
  return (
    <header className="header">
      <h1 className="title">Memory Game</h1>
      <button className="btn btn-menu" onClick={() => setNumCards([])}>
        Back to Menu &gt;&gt;
      </button>
    </header>
  );
}

export default Header;
