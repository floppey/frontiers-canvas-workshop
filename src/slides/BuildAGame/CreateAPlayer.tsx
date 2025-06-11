import { Code } from "../../components/Code";

export const CreateAPlayer: React.FC = () => {
  return (
    <>
      <h1>Lag en Player class</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Player {
  game: Game;
  x: number;
  y: number;
  height: number = 10;
  width: number = 10;

  constructor(game: Game, x: number, y: number) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  async update() {
    // TODO
  }

  async draw() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(
      this.x - this.width / 2, 
      this.y - this.height, 
      this.width, 
      this.height
    );
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
