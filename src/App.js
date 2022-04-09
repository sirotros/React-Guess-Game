import "./App.css";
import { React, useState, useEffect } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";

function App() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState(
    Math.floor(Math.random() * 20)
  );
  const [displayMessage, setDisplayMessage] = useState("Start guessing...");
  const [score, setScore] = useState(10);
  const [highscore, setHighscore] = useState(
    localStorage.getItem("highScore") ? localStorage.getItem("highScore") : 0
  );
  console.log(computerChoice);
  useEffect(() => {
    if (localStorage.getItem("highScore") === null) {
      localStorage.setItem("highScore", "0");
    }
  }, []);
  useEffect(() => {
    if (score > 1) {
      if (userChoice > computerChoice) {
        if (userChoice - computerChoice < 5) {
          setDisplayMessage("Your Guess high");
        } else if (userChoice - computerChoice > 5) {
          setDisplayMessage("Your Guess too high");
        }
        setScore(score - 1);
      } else if (userChoice < computerChoice) {
        if (computerChoice - userChoice < 5) {
          setDisplayMessage("Your Guess low");
        } else if (computerChoice - userChoice > 5) {
          setDisplayMessage("Your Guess too low");
        }
        setScore(score - 1);
      } else if (userChoice === computerChoice) {
        setDisplayMessage("You Win");
        document.querySelector("body").style.background = "green";
        localStorage.setItem("highScore", score);
        setHighscore(score);
      }
    } else {
      setDisplayMessage("You Lose");
      document.querySelector("body").style.background = "red";
    }
  }, [userChoice]);

  return (
    <>
      <Header setDisplayMessage={setDisplayMessage} setScore={setScore} />
      <Content
        displayMessage={displayMessage}
        score={score}
        highscore={highscore}
        setUserChoice={setUserChoice}
      />
    </>
  );
}

export default App;
