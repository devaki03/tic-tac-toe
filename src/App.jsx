import { useState } from "react";
import Board from "./components/Board";
import StartScreen from "./components/StartScreen";

export const THEMES = {
  ninja: {
    id: "ninja",
    name: "Ninja Way",
    bg: "bg-orange-400",
    container: "bg-blue-600",
    textPrimary: "text-white",
    textSecondary: "text-orange-200",
    buttonBg: "bg-orange-500 hover:bg-orange-400 text-white",
    boardBg: "bg-blue-500",
    xColor: "text-orange-400",
    oColor: "text-blue-500",
    xDrop: "rgba(253,186,116,1)",
    oDrop: "rgba(147,197,253,1)"
  },
  pirate: {
    id: "pirate",
    name: "Grand Pirate",
    bg: "bg-cyan-400",
    container: "bg-red-500",
    textPrimary: "text-white",
    textSecondary: "text-yellow-300",
    buttonBg: "bg-yellow-400 hover:bg-yellow-300 text-black",
    boardBg: "bg-amber-200",
    xColor: "text-red-500",
    oColor: "text-blue-600",
    xDrop: "rgba(239,68,68,1)",
    oDrop: "rgba(37,99,235,1)"
  },
  saiyan: {
    id: "saiyan",
    name: "Super Fighter",
    bg: "bg-yellow-400",
    container: "bg-orange-500",
    textPrimary: "text-white",
    textSecondary: "text-yellow-200",
    buttonBg: "bg-blue-600 hover:bg-blue-500 text-white",
    boardBg: "bg-orange-400",
    xColor: "text-yellow-400",
    oColor: "text-blue-800",
    xDrop: "rgba(253,224,71,1)",
    oDrop: "rgba(30,64,175,1)"
  },
  hero: {
    id: "hero",
    name: "Pro Hero",
    bg: "bg-green-400",
    container: "bg-white",
    textPrimary: "text-red-600",
    textSecondary: "text-blue-600",
    buttonBg: "bg-red-500 hover:bg-red-400 text-white",
    boardBg: "bg-yellow-300",
    xColor: "text-blue-600",
    oColor: "text-red-600",
    xDrop: "rgba(37,99,235,1)",
    oDrop: "rgba(220,38,38,1)"
  }
};

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [currentTheme, setCurrentTheme] = useState(THEMES.ninja);

  return (
    <div className={`h-[100dvh] w-full flex flex-col items-center justify-center ${currentTheme.bg} halftone-bg p-2 sm:p-4 overflow-hidden relative transition-colors duration-500`}>
      
      {/* Theme Selector */}
      <div className="w-full sm:absolute sm:top-4 sm:right-4 z-50 flex gap-1 sm:gap-2 flex-wrap justify-center sm:justify-end shrink-0 sm:max-w-[60%] mb-2 sm:mb-0">
        {Object.values(THEMES).map((t) => (
          <button
            key={t.id}
            onClick={() => setCurrentTheme(t)}
            className={`px-2 py-1 text-[10px] sm:text-xs font-black cartoon-font comic-border-sm comic-button ${
              currentTheme.id === t.id ? 'bg-black text-white shadow-[2px_2px_0_#fff]' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Header/Title */}
      <div className="relative z-10 flex flex-col items-center justify-center shrink-0 w-full max-w-lg sm:mt-0 mb-2 sm:mb-4">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl mt-10 font-black cartoon-font text-white manga-text tracking-widest uppercase rotate-[-2deg] m-0 leading-none`}>
          BRAWL TOE
        </h1>
        
        {gameStarted && (
          <div className={`flex items-center justify-between gap-2 mt-3 sm:mt-4 ${currentTheme.container} px-4 sm:px-8 py-2 comic-border relative transition-colors duration-500 w-full max-w-[320px] sm:max-w-[400px]`}>
            {/* Player 1 Info */}
            <div className="flex flex-col items-start w-1/3">
              <span className={`text-[10px] sm:text-xs ${currentTheme.textSecondary} font-black uppercase tracking-widest leading-none`}>P1 [ X ]</span>
              <div className="flex items-center mt-1">
                <span className={`text-3xl sm:text-4xl cartoon-font ${currentTheme.textPrimary} manga-text leading-none`}>{scores.X}</span>
              </div>
            </div>

            {/* VS Badge */}
            <div className="flex flex-col items-center justify-center shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-yellow-400 text-black cartoon-font text-xl sm:text-2xl px-2 py-1 comic-border rotate-[10deg] scale-110">
                VS
              </div>
            </div>

            {/* Player 2 Info */}
            <div className="flex flex-col items-end w-1/3">
              <span className={`text-[10px] sm:text-xs ${currentTheme.textSecondary} font-black uppercase tracking-widest leading-none`}>[ O ] P2</span>
              <div className="flex items-center mt-1">
                <span className={`text-3xl sm:text-4xl cartoon-font ${currentTheme.textPrimary} manga-text leading-none`}>{scores.O}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center min-h-0">
        {!gameStarted ? (
          <StartScreen onStart={() => setGameStarted(true)} theme={currentTheme} />
        ) : (
          <Board 
            onRestart={() => {
              setGameStarted(false);
              setScores({ X: 0, O: 0 });
            }}
            scores={scores}
            setScores={setScores}
            theme={currentTheme}
          />
        )}
      </div>
      
    </div>
  );
}

export default App;