import { useState } from "react";
import "./App.css";

// Array of phrases for "No" button
const phrase = [
  "Cos you never asked :(",
  "Are you sure?",
  "No.",
  "Why?",
  "I am sad.",
  "You are breaking my heart.",
  "Baby.... :(",
  "You don't want to celebrate?",
  "Baby forgot about Valentine?",
  "Really, baby?",
  "Don't do this to me :(",
];

function App() {
  // State for "Yes" button
  const [yes, setYes] = useState(false);
  // State for counting "No" clicks
  const [noCount, setNoCount] = useState(0);
  // State for the size of the "Yes" button
  const [yesButtonSize, setYesButtonSize] = useState(16);

  // Function to select a random phrase index

  const selectRandomIndex = () => {
    return Math.floor(Math.random() * phrase.length);
  };

  // Function to handle "No" button click
  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Increase the size of the "Yes" button with every "No" click
    setYesButtonSize((prevSize) => prevSize + 20);
  };

  return (
    <div className="container">
      {yes ? (
        <div className="content">
          <img
            src="https://raw.githubusercontent.com/estney/valentine/main/public/val2.jpg"
            alt="Yay"
          />
          <p>Yay! Let's celebrate on 14th and 18th Feb.</p>
          <p>You'll take care of the 14th.</p>
          <p>And I'll handle the 18th.</p>
        </div>
      ) : (
        <div className="content">
          <img src="./val1.jpg" alt="Will you be my Valentine?" />
          <p>Will you be my valentine?</p>
          <button
            onClick={() => setYes(true)}
            style={{
              fontSize: `${yesButtonSize}px`,
              backgroundColor: "#f6c254",
              borderRadius: `8px`,
              padding: `12px`,
              margin: "5px",
              border: "none",
            }}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            style={{
              backgroundColor: "#d5d5d5",
              borderRadius: `8px`,
              padding: `12px`,
              margin: "5px",
              border: "none",
            }}
          >
            {phrase[selectRandomIndex()]}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
