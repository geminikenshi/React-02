export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{!winner ? "It is a draw" : `${winner} won!`}</p>
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
