function Card({ card, setPairCards }) {
  const changeVisibility = (id, { currentTarget }) => {
    if (currentTarget.classList.contains("showCard")) return;
    currentTarget.classList.add("showCard");
    setPairCards((card) => [...card, { id: id, element: currentTarget }]);
  };

  return (
    <div className="card" onClick={(evt) => changeVisibility(card.id, evt)}>
      <img className="card__img" src={card.img} alt="random" />
      <h3 className="card__text">?</h3>
    </div>
  );
}

export default Card;
