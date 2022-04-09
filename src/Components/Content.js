import React from "react";

function Content({ displayMessage, score, highscore, setUserChoice }) {
  function getUserChoice(e) {
    e.preventDefault();
    const value = e.target[0].value;
    setUserChoice(Number(value));
  }

  return (
    <main>
      <form onSubmit={getUserChoice} className="left">
        <input type="number" className="guess" id="guess" />
        <button className="btn check" id="btn">
          Check!
        </button>
      </form>
      <section className="right">
        <p className="message">{displayMessage}</p>
        <p className="label-score">
          💯 Score: <span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
}

export default Content;
