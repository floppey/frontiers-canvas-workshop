import { Code } from "../../components/Code";

export const UserInput: React.FC = () => {
  return (
    <>
      <h1>Brukerinput</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class InputHandler {
  game: Game;
  pressedKeys: Record<string, boolean> = {};

  constructor(game: Game) {
    this.game = game;

    this.game.canvas.addEventListener("keydown", (event) => {
      this.pressedKeys[event.key.toUpperCase()] = true;
    });

    this.game.canvas.addEventListener("keyup", (event) => {
      this.pressedKeys[event.key.toUpperCase()] = false;
    });
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
