function StartScreen({ onStart, theme }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${theme.container} p-6 sm:p-8 comic-border relative rotate-[1deg] transition-colors duration-500 w-full max-w-[320px] sm:max-w-[400px]`}>
      <div className="text-center space-y-2">
        <p className={`cartoon-font text-3xl sm:text-4xl ${theme.textPrimary} uppercase tracking-widest manga-text leading-tight`}>
          Ready to Fight?
        </p>
        <p className={`text-sm sm:text-base font-bold ${theme.textSecondary}`}>
          The ultimate 3-in-a-row battle!
        </p>
      </div>

      <button
        onClick={onStart}
        className={`group relative flex items-center justify-center w-full px-6 py-3 ${theme.buttonBg} cartoon-font text-2xl sm:text-3xl uppercase tracking-widest comic-border comic-button hover:scale-105 z-10 transition-colors duration-500`}
      >
        <span>START BATTLE!</span>
      </button>
    </div>
  );
}

export default StartScreen;