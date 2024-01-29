import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbol={"❌"} />
          <Player name={"Player 2"} symbol={"⭕"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
