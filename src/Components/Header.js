import React from "react";

function Header({ setDisplayMessage, setScore }) {
  function reset() {
    
    setScore(10);
    setDisplayMessage("Start guessing...");
    document.querySelector("body").style.background = "#222";
  }
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button onClick={reset} className="btn again" id="again">
        Again!
      </button>
      <div className="number">?</div>
    </header>
  );
}

export default Header;
