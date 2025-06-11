import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

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
    if (this.game.input.pressedKeys["A"]) {
      this.x -= 5;
    }
    if (this.game.input.pressedKeys["D"]) {
      this.x += 5;
    }
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

class InputHandler {
  game: Game;
  pressedKeys: Record<string, boolean> = {};
  eventListeners: Record<string, (event: Event) => void> = {};

  constructor(game: Game) {
    this.game = game;

    this.eventListeners["keydown"] = (e) => {
      const event = e as KeyboardEvent;
      this.pressedKeys[event.key.toUpperCase()] = true;
    };

    this.eventListeners["keyup"] = (e) => {
      const event = e as KeyboardEvent;
      this.pressedKeys[event.key.toUpperCase()] = false;
    };

    Object.entries(this.eventListeners).forEach(([event, listener]) => {
      document.addEventListener(event, listener);
    });
  }

  destroy() {
    Object.entries(this.eventListeners).forEach(([event, listener]) => {
      document.removeEventListener(event, listener);
    });
  }
}

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player: Player;
  input: InputHandler;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.player = new Player(this, canvas.width / 2, canvas.height / 2);
    this.input = new InputHandler(this);
  }

  async update() {
    this.player.update();
  }

  async draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw();
  }

  destroy() {
    this.input.destroy();
  }
}

export const AddUserInputToGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let id = -1;
    let game: Game | null = null;
    if (canvasRef.current) {
      game = new Game(canvasRef.current);

      const loop = async () => {
        await game?.update();
        game?.draw();
        id = setTimeout(() => loop(), 1000 / 120);
      };

      loop();
    }

    return () => {
      clearTimeout(id);
      game?.destroy();
    };
  }, [canvasRef]);

  return (
    <>
      <h1>Legg til brukerinput i spillet</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            code={`
class Game {
  ...
  input: InputHandler;

  constructor(canvas: HTMLCanvasElement) {
    ...
    this.input = new InputHandler(this);
  }
}

class Player {
  ...

  async update() {
    if(this.game.input.pressedKeys["A"]) {
      this.x -= 5;
    }
    if(this.game.input.pressedKeys["D"]) {
      this.x += 5;
    }
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
