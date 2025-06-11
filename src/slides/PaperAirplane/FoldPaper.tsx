import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

export const FoldPaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId = 0;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        // Draw A4 paper
        const canvasAspectRatio = canvas.height / canvas.width;
        const a4AspectRatio = 297 / 210; // A4 paper aspect ratio

        let a4Width, a4Height;

        if (canvasAspectRatio < a4AspectRatio) {
          // Canvas is taller than A4 paper
          a4Width = canvas.width * 0.875;
          a4Height = a4Width / a4AspectRatio;
        } else {
          // Canvas is wider than A4 paper
          a4Height = canvas.height * 0.875;
          a4Width = a4Height * a4AspectRatio;
        }

        const x = (canvas.width - a4Width) / 2;
        const y = (canvas.height - a4Height) / 2;

        ctx.fillRect(x, y, a4Width, a4Height);

        let frame = 0;

        const drawFold = async () => {
          // Clear canvas for each frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const stationaryWidth = a4Width * 0.8;
          const foldingWidth = a4Width * 0.2;

          // Draw paper
          ctx.fillStyle = "white";
          ctx.fillRect(x, y, stationaryWidth, a4Height);

          ctx.save();
          // Draw folding line
          ctx.strokeStyle = "black";
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(x + stationaryWidth, y);
          ctx.lineTo(x + stationaryWidth, y + a4Height);
          ctx.stroke();

          ctx.restore();

          const progress = Math.min(1, frame / 400);

          const angle = -Math.PI * progress;

          ctx.fillStyle = progress < 0.5 ? "white" : "lightgrey";

          const foldX = x + stationaryWidth + foldingWidth * Math.cos(angle);
          const foldY = y + foldingWidth * Math.sin(angle);

          ctx.beginPath();
          ctx.moveTo(x + stationaryWidth, y);
          ctx.lineTo(foldX, foldY);
          ctx.lineTo(foldX, foldY + a4Height);
          ctx.lineTo(x + stationaryWidth, y + a4Height);
          ctx.fill();

          frame++;

          // Loop animation
          if (frame > 600) {
            frame = 0;
          }
          // Draw next frame
          animationFrameId = requestAnimationFrame(drawFold);
        };

        drawFold();
      }
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return (
    <>
      <h1>First fold</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="600"></canvas>
        </div>
        <div className="column">
          <Code
            fontSize="small"
            code={`
const drawFold = async () => {
// ...

const progress = Math.min(1, frame / 400);
const angle = -Math.PI * progress;

ctx.fillStyle = progress < 0.5 ? "white" : "lightgrey";

const foldX = x + stationaryWidth + foldingWidth * Math.cos(angle);
const foldY = y + foldingWidth * Math.sin(angle);

ctx.beginPath();
ctx.moveTo(x + stationaryWidth, y);
ctx.lineTo(foldX, foldY);
ctx.lineTo(foldX, foldY + a4Height);
ctx.lineTo(x + stationaryWidth, y + a4Height);
ctx.fill();
};
`}
          />
        </div>
      </div>
    </>
  );
};
