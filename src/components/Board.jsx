import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Square from "./Square";
import GameStatus from "./GameStatus";
import calculateWinner from "../utils/calculateWinner";

function Board({ onRestart, scores, setScores, theme }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];

  useEffect(() => {
    if (winner && winner !== "Draw") {
      const end = Date.now() + 1000;
      const colors = ["#ff0000", "#ffff00", "#0000ff", "#00ff00", "#ff8800"];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
          zIndex: 100
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
          zIndex: 100
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
      
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner] + 1
      }));
    }
  }, [winner, setScores]);

  function handleClick(i) {
    if (squares[i] || winner) return;

    const updated = [...squares];
    updated[i] = isXNext ? "X" : "O";

    setSquares(updated);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true); 
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full max-w-[320px] sm:max-w-[400px]">
      <GameStatus winner={winner} isXNext={isXNext} theme={theme} />

      <div className={`grid grid-cols-3 gap-2 p-2 sm:p-3 ${theme.boardBg} comic-border w-full aspect-square relative z-10 rotate-1 transition-colors duration-500`}>
        {squares.map((val, i) => (
          <Square 
            key={i} 
            value={val} 
            onClick={() => handleClick(i)} 
            isWinningSquare={winningLine.includes(i)}
            disabled={!!winner}
            theme={theme}
          />
        ))}
      </div>

      <div className="flex gap-2 sm:gap-4 w-full justify-center">
        <button
          onClick={resetGame}
          className={`flex-1 flex items-center justify-center px-2 py-2 sm:py-3 ${theme.buttonBg} cartoon-font text-lg sm:text-xl uppercase tracking-widest comic-border comic-button transition-colors duration-500`}
        >
          {winner ? "REMATCH!" : "RESTART!"}
        </button>

        <button
          onClick={onRestart}
          className={`flex-1 flex items-center justify-center px-2 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-black cartoon-font text-lg sm:text-xl uppercase tracking-widest comic-border comic-button`}
        >
          FLEE!
        </button>
      </div>
    </div>
  );
}

export default Board;