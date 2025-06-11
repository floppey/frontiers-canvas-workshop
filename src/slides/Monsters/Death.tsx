import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

class Unit {
  game: Game;
  id: number;
  x: number;
  y: number;
  height: number = 64;
  width: number = 64;
  velocityY: number = 0;

  constructor(game: Game, x: number, y: number) {
    this.game = game;
    this.id = Math.floor(Math.random() * 100000000);
    this.x = x;
    this.y = y;
  }

  async update() {
    this.velocityY = Math.min(this.velocityY + 0.5, 10);
    this.y += this.velocityY;

    // Only check for collision if player is falling
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

  async draw() {}

  isOnPlatform(platform: Platform) {
    // Snap to platform if player partly inside platform
    const tolerance = 10;
    return (
      this.x + this.width > platform.x &&
      this.x < platform.x + platform.width &&
      this.y >= platform.y &&
      this.y <= platform.y + tolerance
    );
  }

  landsOnUnit(unit: Unit): boolean {
    if (this.velocityY <= 0) {
      return false;
    }
    return this.collidesWith(unit);
  }

  collidesWith(unit: Unit): boolean {
    return (
      this.x + this.width > unit.x &&
      this.x < unit.x + unit.width &&
      this.y <= unit.y &&
      this.y >= unit.y - unit.height
    );
  }
}

class Player extends Unit {
  sprite: HTMLImageElement;
  lives: number = 3;
  invulnerable: number = 0;
  timeOfDeath: number | null = null;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.sprite = new Image();
    this.sprite.src = "/sprite.png";
  }

  async update() {
    if (this.isDead()) {
      return;
    }
    if (this.game.input.pressedKeys["A"]) {
      this.x -= 5;
    }
    if (this.game.input.pressedKeys["D"]) {
      this.x += 5;
    }
    if (!this.isInvulnerable()) {
      this.game.monsters.forEach((monster) => {
        if (this.landsOnUnit(monster)) {
          this.game.monsters = this.game.monsters.filter(
            (m) => m.id !== monster.id
          );
          this.velocityY = -5;
        } else if (this.collidesWith(monster)) {
          this.lives -= 1;
          if (this.lives <= 0) {
            this.timeOfDeath = Date.now();
          } else {
            this.invulnerable = Date.now() + 1000;
          }
        }
      });
    }

    super.update();
  }

  async draw() {
    const spriteSize = 64;
    let row = 0;
    let col = 0;
    let numberOfFrames: number;

    if (this.isDead()) {
      row = 20;
      numberOfFrames = 6;
    } else if (
      this.game.input.pressedKeys["A"] &&
      !this.game.input.pressedKeys["D"]
    ) {
      row = 9;
      numberOfFrames = 9;
    } else if (
      this.game.input.pressedKeys["D"] &&
      !this.game.input.pressedKeys["A"]
    ) {
      row = 11;
      numberOfFrames = 9;
    } else {
      row = 14;
      numberOfFrames = 1;
    }

    col = Math.floor((Date.now() / 100) % numberOfFrames);

    if (this.isDead()) {
      col = Math.min(5, Math.floor((Date.now() - this.timeOfDeath) / 100));
    }

    this.game.ctx.save();
    if (this.isInvulnerable()) {
      this.game.ctx.globalAlpha =
        0.15 + 0.5 * Math.abs(Math.sin(Date.now() / 100));
    }
    this.game.ctx.drawImage(
      this.sprite,
      col * spriteSize,
      row * spriteSize,
      spriteSize,
      spriteSize,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
    this.game.ctx.restore();
  }

  isInvulnerable() {
    return this.invulnerable > Date.now();
  }

  isDead(): this is { timeOfDeath: number } {
    return this.timeOfDeath !== null;
  }

  jump() {
    this.velocityY = -10;
  }
}

class Monster extends Unit {
  direction: "left" | "right" = "right";
  speed: number = 1;
  height: number = 32;
  width: number = 32;

  async update() {
    super.update();
    const platform = this.game.platforms.find((platform) =>
      this.isOnPlatform(platform)
    );
    const minX = platform?.x || 0;
    const maxX =
      (platform ? platform.x + platform.width : this.game.canvas.width) -
      this.width;

    if (this.direction === "right") {
      this.x += this.speed;
    } else {
      this.x -= this.speed;
    }

    if (this.x >= maxX) {
      this.direction = "left";
      this.x = maxX;
    } else if (this.x <= minX) {
      this.direction = "right";
      this.x = minX;
    }
  }

  async draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(
      this.x,
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
      if (event.key === " ") {
        event.preventDefault();
        this.game.player.jump();
      }
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

  async draw() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player: Player;
  platforms: Platform[] = [];
  monsters: Monster[] = [];
  input: InputHandler;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.player = new Player(this, canvas.width / 2, canvas.height / 2);
    this.input = new InputHandler(this);
    this.platforms.push(
      new Platform(
        this,
        canvas.width / 4,
        canvas.height / 2,
        20,
        canvas.width / 4
      )
    );
    this.platforms.push(
      new Platform(
        this,
        canvas.width / 1.5,
        canvas.height / 1.25,
        20,
        canvas.width / 4
      )
    );
    this.monsters.push(
      new Monster(this, canvas.width / 1.5, canvas.height / 2)
    );
    this.monsters.push(
      new Monster(this, canvas.width / 2.5, canvas.height / 3.25)
    );
  }

  async update() {
    await this.player.update();
    await this.monsters.forEach((monster) => monster.update());
  }

  async draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    await this.player.draw();
    await this.platforms.forEach((platform) => platform.draw());
    await this.monsters.forEach((monster) => monster.draw());
    if (this.player.isDead()) {
      this.ctx.save();
      const gradient = this.ctx.createLinearGradient(
        0,
        0,
        0,
        this.canvas.height
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(0.25, "rgba(0, 0, 0, 0.25)");
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(0.75, "rgba(0, 0, 0, 0.25)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(
        0,
        this.canvas.height / 3,
        this.canvas.width,
        this.canvas.height / 3
      );

      this.ctx.fillStyle = "red";
      this.ctx.font = "60px Times New Roman";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(
        "YOU DIED",
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      this.ctx.restore();
    } else {
      for (let i = 0; i < this.player.lives; i++) {
        this.ctx.fillStyle = "red";
        this.ctx.font = "20px Arial";
        this.ctx.fillText("❤️", 10 + i * 30, 30);
      }
    }
  }

  destroy() {
    this.input.destroy();
  }
}

export const Death: React.FC = () => {
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
      <h1>Død 💀</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            fontSize="small"
            code={`
class Player extends Unit {
  ...
  timeOfDeath: number | null = null;

  isDead(): this is { timeOfDeath: number } {
    return this.timeOfDeath !== null;
  }

  async update() {
    if(this.isDead()) { return; }
    ...
    if (this.collidesWith(monster)) {
      this.lives -= 1;
      if (this.lives <= 0) {
        this.timeOfDeath = Date.now();
      } else {
        this.invulnerable = Date.now() + 1000;
      }
    }
  }

  async draw() {
    ...
    if (this.isDead()) {
      row = 20;
      numberOfFrames = 6;
    }
    ...
    if (this.isDead()) {
      col = Math.min(5, Math.floor((Date.now() - this.timeOfDeath) / 100));
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
