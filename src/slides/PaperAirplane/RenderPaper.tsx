import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";

export const RenderPaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

        const x = 0;
        const y = 0;

        ctx.fillRect(x, y, a4Width, a4Height);
      }
    }
  }, [canvasRef]);

  return (
    <>
      <h1>Step 1: Draw an A4 sheet</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="400" height="400"></canvas>
        </div>
        <div className="column">
          <Code
            code={`
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const a4Width = 297;
const a4Height = 210;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, a4Width, a4Height);
                    `}
          />
        </div>
      </div>
    </>
  );
};
