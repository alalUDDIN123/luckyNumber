import React, { useState } from "react";
import RandomGame from "./Components/RandomeGame";
import Modal from 'react-modal';
import "./App.css"

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
};


function App() {
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [gameCancelled, setGameCancelled] = useState(false);

  const handleStartGame = () => {
    setShowGame(true);
    setShowModal(false);
  };

  const handleCancelGame = () => {
    setGameCancelled(true);
    setShowModal(false);
  };
  const handleGoBack = () => {
    setShowModal(true);
    setGameCancelled(false);
  };
  return (
    <>
      {showModal && (
        <Modal isOpen={showModal} style={customStyles}>
          <h1>Welcome to the Lucky Number Game!</h1>
          <p>Here are the rules:</p>
          <ul>
            <li>You will have three chances to guess a number between 50 and 100.</li>
            <li>After three times if your number greater than opponent then you will win else loss</li>
          </ul>
          <button onClick={handleStartGame}>Start</button>
          <button onClick={handleCancelGame}>Cancel</button>
        </Modal>
      )}

      {showGame && !gameCancelled && <RandomGame />}
      {gameCancelled && (
        <div className="cancel-message">
          <p>You are not interested to play.</p>
          <button onClick={handleGoBack}>Go back</button>
        </div>
      )}
    </>
  );
}

export default App;