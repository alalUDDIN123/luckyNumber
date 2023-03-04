// import React, { useState, useEffect } from 'react';

// const RandomGame = () => {
//     const [player1Numbers, setPlayer1Numbers] = useState([]);
//     const [player2Numbers, setPlayer2Numbers] = useState([]);
//     const [winner, setWinner] = useState('');

//     const generateRandomNumber = () => {
//         return Math.floor(Math.random() * 51) + 50;
//     };

//     const handleClickPlayer1 = () => {
//         if (player1Numbers.length < 3) {
//             const randomNumber = generateRandomNumber();
//             setPlayer1Numbers([...player1Numbers, randomNumber]);
//         }
//     };

//     const handleClickPlayer2 = () => {
//         if (player2Numbers.length < 3) {
//             const randomNumber = generateRandomNumber();
//             setPlayer2Numbers([...player2Numbers, randomNumber]);
//         }
//     };
//     const handlePlayAgain = () => {
//         setPlayer1Numbers([]);
//         setPlayer2Numbers([]);
//         setWinner('');
//     };

//     const getMaxNumber = (numbers) => {
//         return Math.max(...numbers);
//     };

//     useEffect(() => {
//         if (player1Numbers.length === 3 && player2Numbers.length === 3) {
//             const maxNumberPlayer1 = getMaxNumber(player1Numbers);
//             const maxNumberPlayer2 = getMaxNumber(player2Numbers);

//             if (maxNumberPlayer1 > maxNumberPlayer2) {
//                 setWinner('Player 1');
//             } else if (maxNumberPlayer1 < maxNumberPlayer2) {
//                 setWinner('Player 2');
//             } else {
//                 setWinner('It\'s a tie!');
//             }
//         }
//     }, [player1Numbers, player2Numbers]);

//     return (
//         <div>
//             <h1>Random Game</h1>
//             <div>
//                 <button onClick={handleClickPlayer1}>Player 1</button>
//                 <button onClick={handleClickPlayer2}>Player 2</button>
//             </div>
//             <div>
//                 <p>Player 1 numbers: {player1Numbers.join(', ')}</p>
//                 <p>Player 2 numbers: {player2Numbers.join(', ')}</p>
//             </div>
//             {winner ? (
//                 <>
//                     <h2>{winner} wins!</h2>
//                     <p>Player 1: {getMaxNumber(player1Numbers)}</p>
//                     <p>Player 2: {getMaxNumber(player2Numbers)}</p>
//                     <button onClick={handlePlayAgain}>Play Again</button>
//                 </>
//             ) : null}
//         </div>
//     );
// };

// export default RandomGame;


/// updated

import React, { useState, useEffect } from 'react';
import './Randome.css';

const RandomGame = () => {
    const [player1Numbers, setPlayer1Numbers] = useState([]);
    const [player2Numbers, setPlayer2Numbers] = useState([]);
    const [winner, setWinner] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState(1);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 51) + 50;
    };

    const handleClickPlayer1 = () => {
        if (player1Numbers.length < 3) {
            if (currentPlayer === 1) {
                const randomNumber = generateRandomNumber();
                setPlayer1Numbers([...player1Numbers, randomNumber]);
                setCurrentPlayer(2);
            }
        }
    };

    const handleClickPlayer2 = () => {
        if (player2Numbers.length < 3) {
            if (currentPlayer === 2) {
                const randomNumber = generateRandomNumber();
                setPlayer2Numbers([...player2Numbers, randomNumber]);
                setCurrentPlayer(1);
            }
        }
    };

    const handlePlayAgain = () => {
        setPlayer1Numbers([]);
        setPlayer2Numbers([]);
        setWinner('');
        setCurrentPlayer(1);
    };

    const getMaxNumber = (numbers) => {
        return Math.max(...numbers);
    };

    useEffect(() => {
        if (player1Numbers.length === 3 && player2Numbers.length === 3) {
            const maxNumberPlayer1 = getMaxNumber(player1Numbers);
            const maxNumberPlayer2 = getMaxNumber(player2Numbers);

            if (maxNumberPlayer1 > maxNumberPlayer2) {
                setWinner('Player 1');
            } else if (maxNumberPlayer1 < maxNumberPlayer2) {
                setWinner('Player 2');
            } else {
                setWinner("It's a tie!");
            }
        }
    }, [player1Numbers, player2Numbers]);

    const totalNumber = (num) => {
        let total = 0;
        for (let i = 0; i < num.length; i++) {
            total += num[i];
        }

        return total;
    }

    return (
        <div className="random-game">
            <h1>Lucky Number Game</h1>
            <div className="players">
                <div className={`player player1 ${currentPlayer === 1 ? 'active' : ''}`}>
                    <h2>Player 1 {currentPlayer === 1 ? "Turns" : ""}</h2>
                    <button className={currentPlayer === 1 ? "activebtn" : "diactbtn"} onClick={handleClickPlayer1} disabled={winner}>
                        Roll
                    </button>
                    <p className="numbers">Numbers: {player1Numbers.join(', ')}</p>
                    <p>Total {totalNumber(player1Numbers)}</p>
                </div>
                <div className={`player player2 ${currentPlayer === 2 ? 'active' : ''}`}>
                    <h2>Player 2  {currentPlayer === 2 ? "Turns" : ""}</h2>
                    <button className={currentPlayer === 2 ? "activebtn" : "diactbtn"} onClick={handleClickPlayer2} disabled={winner}>
                        Roll
                    </button>
                    <p className="numbers">Numbers: {player2Numbers.join(', ')}</p>
                    <p>Total {totalNumber(player2Numbers)}</p>
                </div>
            </div>
            {winner && (
                <div className="winner">
                    <p>{winner} wins!</p>
                    <button className="playAgain" onClick={handlePlayAgain}>
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default RandomGame;
