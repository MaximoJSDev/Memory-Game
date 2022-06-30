import { useState } from "react";

function Card() {
  const [showCard, setShowCard] = useState(false);
  const changeVisibility = () => {
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 2000);
  };

  return (
    <div className="card" onClick={changeVisibility}>
      <img
        className={`card__img ${showCard && "showImg"}`}
        src="https://images.cults3d.com/cjAUPjIz9fdOOZ0XRDHqzN3DM1k=/https://files.cults3d.com/uploaders/16051858/illustration-file/43d90dcb-d503-44a6-abf3-d383faca9f01/6.jpg"
        alt="random"
      />
      <h3 className={`card__undiscovered ${showCard && "hideText"}`}>?</h3>
    </div>
  );
}

export default Card;
