import Card from "./Card";

function Table() {
  const cards = Array.from({ length: 16 });

  return (
    <div className="table">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

export default Table;
