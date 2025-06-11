import { Code } from "../../components/Code";

export const CreateAGameClass: React.FC = () => {
  return (
    <>
      <h1>Game class</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  async update() {
    /** 
     * Update game state here
     */
  }

  async draw() {
    /** 
     * Draw game state here
     */
  }
}
`}
          />
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};
