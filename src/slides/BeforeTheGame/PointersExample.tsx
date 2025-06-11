import { Code } from "../../components/Code";

export const PointersExample: React.FC = () => {
  return (
    <>
      <h1>Example</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Game {
    player: Player;
    enemy: Enemy;

    constructor() {
        this.player = new Player(this);
        this.enemy = new Enemy(this);
    }
}

class Enemy {
    game: Game;
    hp: number = 50;

    constructor(game: Game) {
        this.game = game;
    }
}
`}
          />
        </div>
        <div className="column">
          <Code
            code={`
class Player {
    game: Game;
    hp: number = 100;

    constructor(game: Game) {
        this.game = game;
    }

    attackEnemy() {
        this.game.enemy.hp -= 10;
    }
}
`}
          />
        </div>
      </div>
    </>
  );
};
