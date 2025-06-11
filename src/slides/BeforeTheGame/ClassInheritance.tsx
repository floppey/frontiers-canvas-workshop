import { Code } from "../../components/Code";

export const ClassInhericance: React.FC = () => {
  return (
    <>
      <h1>Inheritance</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Character {
    name: string;
    hp: number;
    damage: number;

    constructor(name: string, hp: number, damage: number) {
        this.name = name;
        this.hp = hp;
    }

    attack(enemy: Character) {
        enemy.hp -= this.damage;
    }
}

`}
          />
        </div>
        <div className="column">
          <Code
            code={`              
class Enemy extends Character {
    constructor(name: string) {
        super(name, 50, 5); 
    }
}

class Player extends Character {
    constructor(name: string) {
        super(name, 100, 10); 
    }

    heal() {
        this.hp += 10;
    }
}
`}
          />
        </div>
      </div>
    </>
  );
};
