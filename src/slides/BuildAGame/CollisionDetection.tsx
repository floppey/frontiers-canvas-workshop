import { Code } from "../../components/Code";

export const CollisionDetection: React.FC = () => {
  return (
    <>
      <h1>Collision detection</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Player {
  ...

  isOnPlatform(platform: Platform) {
    // PS! player.y is the bottom of the player while platform.y is the top of the platform
    
    // Snap to platform if player is close enough
    const tolerance = 5;
    return (
      this.x + this.width > platform.x &&
      this.x < platform.x + platform.width &&
      this.y >= platform.y &&
      this.y <= platform.y + tolerance
    );
  }

  async update() {
    ...
    // Allow jumping through platforms
    if(this.velocityY > 0) {
      const platform = this.game.platforms.find(platform => this.isOnPlatform(platform));
      if(platform) {
        this.y = platform.y;
        this.velocityY = 0;
      }
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
