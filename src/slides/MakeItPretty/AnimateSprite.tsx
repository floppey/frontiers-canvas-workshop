import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

export const AnimateSprite: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId = 0;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const drawSprite = async () => {
          const spriteHeight = 64;
          const spriteWidth = 64;
          const row = 11;
          const numberOfFrames = 7;
          const frame = Math.floor(Date.now() / 100) % numberOfFrames;
          const spriteY = row * spriteHeight;
          const spriteX = frame * spriteWidth;

          // Clear canvas for each frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw sprite
          ctx.drawImage(
            sprite,
            spriteX,
            spriteY,
            spriteWidth,
            spriteHeight,
            canvas.width / 2 - spriteWidth,
            canvas.height / 2 - spriteHeight,
            spriteWidth * 2,
            spriteHeight * 2
          );

          // Draw next frame
          animationFrameId = requestAnimationFrame(drawSprite);
        };

        const sprite = new Image();
        sprite.src = "/sprite.png";
        sprite.onload = () => {
          drawSprite();
        };
      }
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return (
    <>
      <h1>Animation</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            fontSize="small"
            code={`
const sprite = new Image();
sprite.src = '/sprite.png';
sprite.onload = () => {
  drawSprite();
};

const drawSprite = async () => {
  const spriteHeight = 64;
  const spriteWidth = 64;
  const row = 11;
  const numberOfFrames = 7;
  const frame = Math.floor(Date.now() / 100) % numberOfFrames;
  const spriteY = row * spriteHeight;
  const spriteX = frame * spriteWidth;

  // Clear canvas for each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw sprite
  ctx.drawImage(
    sprite,
    spriteX,
    spriteY,
    spriteWidth,
    spriteHeight,
    canvas.width / 2 - spriteWidth,
    canvas.height / 2 - spriteHeight,
    spriteWidth * 2,
    spriteHeight * 2
  );

  // Draw next frame
  animationFrameId = requestAnimationFrame(drawSprite);
};
`}
          />
        </div>
      </div>
    </>
  );
};
