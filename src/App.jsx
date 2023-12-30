import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbol={"❌"} />
          <Player name={"Player 2"} symbol={"⭕"} />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
