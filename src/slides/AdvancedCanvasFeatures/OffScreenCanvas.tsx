import { useRef, useEffect, useState } from "react";
import { Code } from "../../components/Code";
import { SlideProps } from "../slides";

export const UseOffScreenCanvas: React.FC<SlideProps> = ({ subStep }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [img] = useState<HTMLImageElement>(new Image());
  img.src = "/light-demo.png";

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        if (subStep === 0) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        } else if (subStep === 1) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 2) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";

            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 3) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 4) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "green";
            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 5) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";

            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 6) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";

            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 7) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "rgba(0,0,0,0.75)";
            oCtx.fillRect(0, 0, canvas.width, canvas.height);
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";

            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 8) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "rgba(0,0,0,0.95)";
            oCtx.fillRect(0, 0, canvas.width, canvas.height);

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 120, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 280, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 330, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 70, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";
            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            // ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 9) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 120, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 280, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 330, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 70, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";
            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            // Save the current state
            oCtx.save();

            // Calculate the center and the top-left corner of the 300x300 square
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const squareSize = ctx.canvas.width - 100;
            const squareLeft = centerX - squareSize / 2;
            const squareTop = centerY - squareSize / 2;

            // Create a path for the entire canvas
            oCtx.beginPath();
            oCtx.rect(0, 0, canvas.width, canvas.height);

            // Create a path for the square you want to keep (as a cutout)
            oCtx.moveTo(squareLeft, squareTop);
            oCtx.lineTo(squareLeft, squareTop + squareSize);
            oCtx.lineTo(squareLeft + squareSize, squareTop + squareSize);
            oCtx.lineTo(squareLeft + squareSize, squareTop);
            oCtx.closePath();

            // Set the "evenodd" fill rule to create a "hole" in our path
            oCtx.clip("evenodd");

            // Now clear everything inside the clipping region
            oCtx.clearRect(0, 0, canvas.width, canvas.height);
            oCtx.fillStyle = "rgba(0,0,0,0.75)";
            oCtx.fillRect(0, 0, canvas.width, canvas.height);
            oCtx.restore();

            // ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        } else if (subStep === 10) {
          ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
          const offScreenCanvas = new OffscreenCanvas(
            canvas.width,
            canvas.height
          );
          const oCtx = offScreenCanvas.getContext("2d");
          if (oCtx) {
            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 120, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 120, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(60, 280, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(60, 280, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 330, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 330, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
            oCtx.beginPath();
            oCtx.arc(340, 70, 100, 0, Math.PI * 2);
            oCtx.fill();
            oCtx.fillStyle = "white";
            oCtx.beginPath();
            oCtx.arc(340, 70, 50, 0, Math.PI * 2);
            oCtx.fill();

            oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";
            oCtx.beginPath();
            oCtx.arc(250, 200, 150, 0, Math.PI * 2);
            oCtx.fill();

            // Save the current state
            oCtx.save();

            // Calculate the center and the top-left corner of the 300x300 square
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const squareSize = ctx.canvas.width - 100;
            const squareLeft = centerX - squareSize / 2;
            const squareTop = centerY - squareSize / 2;

            // Create a path for the entire canvas
            oCtx.beginPath();
            oCtx.rect(0, 0, canvas.width, canvas.height);

            // Create a path for the square you want to keep (as a cutout)
            oCtx.moveTo(squareLeft, squareTop);
            oCtx.lineTo(squareLeft, squareTop + squareSize);
            oCtx.lineTo(squareLeft + squareSize, squareTop + squareSize);
            oCtx.lineTo(squareLeft + squareSize, squareTop);
            oCtx.closePath();

            // Set the "evenodd" fill rule to create a "hole" in our path
            oCtx.clip("evenodd");

            // Now clear everything inside the clipping region
            oCtx.clearRect(0, 0, canvas.width, canvas.height);
            oCtx.fillStyle = "rgba(0,0,0,0.75)";
            oCtx.fillRect(0, 0, canvas.width, canvas.height);
            oCtx.restore();

            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(offScreenCanvas, 0, 0);
          }
        }

        ctx.restore();
      }
    }
  }, [canvasRef, subStep, img]);

  return (
    <>
      <h1>OffScreenCanvas</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="400" height="400"></canvas>
        </div>
        <div className="column">
          {subStep === 0 && (
            <Code
              code={`
ctx.drawImage(
  img, 
  0, 
  0, 
  ctx.canvas.width, 
  ctx.canvas.height
);
`}
            />
          )}
          {subStep === 1 && (
            <Code
              code={`
const offScreenCanvas = new OffscreenCanvas(
  canvas.width,
  canvas.height
);
const oCtx = offScreenCanvas.getContext("2d");
if (oCtx) {
  oCtx.fillStyle = "white";
  oCtx.arc(60, 120, 50, 0, Math.PI * 2);
  oCtx.fill();

  ctx.drawImage(offScreenCanvas, 0, 0);
}
`}
            />
          )}
          {subStep === 2 && (
            <Code
              code={`
oCtx.arc(60, 120, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.arc(60, 280, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.arc(340, 330, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.arc(340, 70, 50, 0, Math.PI * 2);
oCtx.fill();

ctx.drawImage(offScreenCanvas, 0, 0);
`}
            />
          )}
          {subStep === 3 && (
            <Code
              code={`
oCtx.beginPath();
oCtx.arc(60, 120, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.beginPath();
oCtx.arc(60, 280, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.beginPath();
oCtx.arc(340, 330, 50, 0, Math.PI * 2);
oCtx.fill();

oCtx.beginPath();
oCtx.arc(340, 70, 50, 0, Math.PI * 2);
oCtx.fill();

ctx.drawImage(offScreenCanvas, 0, 0);
`}
            />
          )}
          {subStep === 4 && (
            <Code
              code={`
oCtx.fillStyle = "green";
oCtx.beginPath();
oCtx.arc(250, 200, 150, 0, Math.PI * 2);
oCtx.fill();
`}
            />
          )}
          {subStep === 5 && (
            <Code
              code={`
oCtx.fillStyle = "rgba(159, 252, 58, 0.75)";
oCtx.beginPath();
oCtx.arc(250, 200, 150, 0, Math.PI * 2);
oCtx.fill();
`}
            />
          )}
          {subStep === 6 && (
            <Code
              code={`
ctx.globalCompositeOperation = "multiply";
ctx.drawImage(offScreenCanvas, 0, 0);
`}
            />
          )}
          {subStep === 7 && (
            <Code
              code={`
oCtx.fillStyle = "rgba(0,0,0,0.75)";
oCtx.fillRect(0, 0, canvas.width, canvas.height);

...

ctx.globalCompositeOperation = "multiply";
ctx.drawImage(offScreenCanvas, 0, 0);
`}
            />
          )}
          {subStep === 8 && (
            <Code
              code={`
oCtx.fillStyle = "rgba(247, 234, 120, 0.75)";
oCtx.beginPath();
oCtx.arc(60, 120, 100, 0, Math.PI * 2);
oCtx.fill();
oCtx.fillStyle = "white";
oCtx.beginPath();
oCtx.arc(60, 120, 50, 0, Math.PI * 2);
oCtx.fill();
`}
            />
          )}
          {subStep === 9 && (
            <Code
              code={`
oCtx.save();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const squareSize = ctx.canvas.width - 100;
const squareLeft = centerX - squareSize / 2;
const squareTop = centerY - squareSize / 2;

oCtx.beginPath();
oCtx.rect(0, 0, canvas.width, canvas.height);

oCtx.moveTo(squareLeft, squareTop);
oCtx.lineTo(squareLeft, squareTop + squareSize);
oCtx.lineTo(squareLeft + squareSize, squareTop + squareSize);
oCtx.lineTo(squareLeft + squareSize, squareTop);
oCtx.closePath();

// Set the "evenodd" fill rule to create a "hole" in our path
oCtx.clip("evenodd");

oCtx.clearRect(0, 0, canvas.width, canvas.height);
oCtx.restore();
`}
            />
          )}
          {subStep === 10 && (
            <img height={400} width={400} src="/light-demo.png" alt="Light" />
          )}
        </div>
      </div>
    </>
  );
};
