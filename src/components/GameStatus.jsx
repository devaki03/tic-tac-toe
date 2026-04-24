function GameStatus({ winner, isXNext, theme }) {
  return (
    <div className={`h-12 sm:h-16 flex items-center justify-center w-full ${theme.container} comic-border px-4 relative overflow-hidden -rotate-1 transition-colors duration-500`}>
      {winner === "Draw" ? (
        <div className="relative z-10 flex flex-col items-center">
          <span className={`text-3xl sm:text-4xl cartoon-font ${theme.textPrimary} manga-text animate-pulse`}>DRAW!</span>
        </div>
      ) : winner ? (
        <div className="relative z-10 flex flex-col items-center animate-[bounce_1s_infinite]">
          <span className={`text-3xl sm:text-4xl cartoon-font ${theme.textPrimary} manga-text`}>
            PLAYER {winner} WINS!
          </span>
        </div>
      ) : (
        <div className="relative z-10 flex items-center gap-3">
          <span className={`text-lg sm:text-xl font-black uppercase ${theme.textSecondary}`}>
            Next Turn:
          </span>
          <span className={`text-3xl sm:text-4xl cartoon-font ${isXNext ? theme.xColor : theme.oColor} manga-text`}>
            {isXNext ? 'X' : 'O'}
          </span>
        </div>
      )}
    </div>
  );
}

export default GameStatus;