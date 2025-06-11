import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

export const DottedLine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId = 0;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        // Draw a4 paper
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

        const drawDottedLine = async () => {
          // Clear canvas for each frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw paper
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, a4Width, a4Height);

          // Draw dotted line over 200 frames
          const progress = Math.min(1, frame / 200);
          ctx.strokeStyle = "black";
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(a4Width * 0.8, 0);
          ctx.lineTo(a4Width * 0.8, a4Height * progress);
          ctx.stroke();
          frame++;

          // Loop animation
          if (frame > 400) {
            frame = 0;
          }
          // Draw next frame
          animationFrameId = requestAnimationFrame(drawDottedLine);
        };

        drawDottedLine();
      }
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return (
    <>
      <h1>Dotted line</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="600" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            fontSize="small"
            code={`
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frame = 0;

const drawDottedLine = async () => {
  // Clear canvas for each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw paper
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, a4Width, a4Height);

  // Draw dotted line over 200 frames
  const progress = Math.min(1, frame / 200);
  ctx.strokeStyle = "black";
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(a4Width * 0.8, 0);
  ctx.lineTo(a4Width * 0.8, a4Height * progress);
  ctx.stroke();
  frame++;

  // Loop animation
  if (frame > 400) {
    frame = 0;
  }
  // Draw next frame
  requestAnimationFrame(drawDottedLine);
};

drawDottedLine();
`}
          />
        </div>
      </div>
    </>
  );
};
