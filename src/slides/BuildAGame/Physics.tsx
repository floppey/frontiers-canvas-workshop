import { Code } from "../../components/Code";

export const Physics: React.FC = () => {
  return (
    <>
      <h1>Physics</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Player {
  ...
  velocityY: number = 0;

  jump() {
    this.velocityY = -10;
  }

  async update() {
    ...
    this.velocityY = Math.min(this.velocityY + 0.5, 10);
    this.y += this.velocityY;

    this.y = Math.min(this.y, this.game.canvas.height);
    this.y = Math.max(this.y, this.height);
    this.x = Math.min(this.x, this.game.canvas.width - this.width / 2);
    this.x = Math.max(this.x, this.width / 2);
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
