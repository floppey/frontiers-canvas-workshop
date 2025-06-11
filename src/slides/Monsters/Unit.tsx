import { Code } from "../../components/Code";

export const Unit: React.FC = () => {
  return (
    <>
      <h1>Unit</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Unit {
  game: Game;
  id: number;
  x: number;
  y: number;
  height: number = 10;
  width: number = 10;

  constructor(game: Game, x: number, y: number) {
    this.game = game;
    this.id = Math.floor(Math.random() * 100000000);
    this.x = x;
    this.y = y;
  }

  async update() {
    ...
  }

  async draw() {
    ...
  }
}

class Player extends Unit {
  ...
}
`}
          />
        </div>
        <div className="column">
          <Code
            code={`
class Unit {
  ...
  async update() {
    this.velocityY = Math.min(this.velocityY + 0.5, 10);
    this.y += this.velocityY;

    // Only check for collision if unit is falling
    if (this.velocityY > 0) {
      const platform = this.game.platforms.find((platform) =>
        this.isOnPlatform(platform)
      );
      if (platform) {
        this.y = platform.y;
        this.velocityY = 0;
      }
    }

    this.y = Math.min(this.y, this.game.canvas.height);
    this.y = Math.max(this.y, this.height);
    this.x = Math.min(this.x, this.game.canvas.width - this.width);
    this.x = Math.max(this.x, 0);
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
