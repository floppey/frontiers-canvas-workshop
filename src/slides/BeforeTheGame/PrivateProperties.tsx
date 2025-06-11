import { Code } from "../../components/Code";

export const PrivateFields: React.FC = () => {
  return (
    <>
      <h1>Private Fields</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Monster {
  #hp: number = 100;
  isDead: boolean = false;
  
  get hp() {
    return this.#hp;
  }

  set hp(hp: number) {
    this.#hp = hp;
    if (this.#hp <= 0) {
      this.isDead = true;
    }
  }
}
`}
          />
        </div>
        <div className="column">
          <Code
            code={`
const monster = new Monster();
monster.hp -= 50;
console.log(monster.isDead); // false
monster.hp -= 50;
console.log(monster.isDead); // true
`}
          />
        </div>
      </div>
    </>
  );
};
