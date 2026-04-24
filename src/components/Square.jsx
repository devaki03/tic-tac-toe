function Square({ value, onClick, isWinningSquare, disabled, theme }) {
  const valueColor = value === 'X' ? theme.xColor : theme.oColor;
  const dropColor = value === 'X' ? theme.xDrop : theme.oDrop;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled && !value}
      className={`
        relative flex items-center justify-center text-5xl sm:text-6xl md:text-7xl cartoon-font
        transition-all duration-200 comic-border comic-button bg-white
        ${!value && !disabled ? 'hover:bg-gray-200 cursor-pointer active:scale-95' : 'cursor-default'}
        ${isWinningSquare ? 'bg-yellow-200 scale-110 z-20' : ''}
        ${valueColor}
      `}
      style={{
        textShadow: value ? `2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0 ${dropColor}` : 'none'
      }}
    >
      <span className={`relative z-10 transform transition-transform duration-200 
        ${value ? 'scale-100' : 'scale-50'}`}>
        {value}
      </span>
    </button>
  );
}

export default Square;