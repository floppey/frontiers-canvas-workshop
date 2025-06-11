import { Code } from "../../components/Code";

export const Platforms: React.FC = () => {
  return (
    <>
      <h1>No platformer without platforms</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Platform {
  game: Game;
  x: number;
  y: number;
  height: number;
  width: number;

  constructor(game: Game, x: number, y: number, height: number, width: number) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  draw() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
