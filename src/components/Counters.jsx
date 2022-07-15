import { useEffect, useState } from "react";

function Counters({ movements, remainingPairs }) {
  const [time, setTime] = useState({ s: 0, m: 0 });
  var updatedS = time.s,
    updatedM = time.m;

  const run = () => {
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    setTime({ s: updatedS, m: updatedM });
  };

  useEffect(() => {
    let interval = setInterval(run, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter">
      <span>Movements: {movements}</span>
      <span>
        Time: {time.m}:{time.s}
      </span>
      <span>Remaining pairs: {remainingPairs}</span>
    </div>
  );
}

export default Counters;
