import { useState } from "react";

function Card({ card }) {
  const [showCard, setShowCard] = useState(false);
  const changeVisibility = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 2000);
  };

  return (
    <div className="card" onClick={changeVisibility} idcard={card.id}>
      <img
        className={`card__img ${showCard && "showImg"}`}
        src={card.img}
        alt="random"
      />
      <h3 className={`card__undiscovered ${showCard && "hideText"}`}>?</h3>
    </div>
  );
}

export default Card;
