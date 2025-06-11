import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";
import { SlideProps } from "../slides";

export const BlendMode: React.FC<SlideProps> = ({ subStep }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/light-demo.png";
    const drawBlueRectangle = (ctx: CanvasRenderingContext2D) => {
      // draw a rectangle
      ctx.fillStyle = "blue";
      ctx.fillRect(
        (ctx.canvas.width - 100) / 2,
        (ctx.canvas.height - 100) / 2,
        100,
        100
      );
    };
    const drawRedRectangle = (ctx: CanvasRenderingContext2D) => {
      // draw a rectangle at a 45 degree angle

      ctx.translate(ctx.canvas.width / 2, (ctx.canvas.height - 100) / 2);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 100, 100);
    };
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        if (subStep === 0) {
          drawBlueRectangle(ctx);
        } else if (subStep === 1) {
          drawBlueRectangle(ctx);
          drawRedRectangle(ctx);
        } else if (subStep === 2) {
          drawBlueRectangle(ctx);
          ctx.globalCompositeOperation = "multiply";
          drawRedRectangle(ctx);
        } else if (subStep === 3) {
          drawBlueRectangle(ctx);
          ctx.globalCompositeOperation = "source-out";
          drawRedRectangle(ctx);
        } else if (subStep === 4) {
          drawBlueRectangle(ctx);
          ctx.globalCompositeOperation = "hue";
          drawRedRectangle(ctx);
        } else if (subStep === 5) {
          drawBlueRectangle(ctx);
          ctx.globalAlpha = 0.5;
          drawRedRectangle(ctx);
        }

        ctx.restore();
      }
    }
  }, [canvasRef, subStep]);

  return (
    <>
      <h1>Colors and transparency</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="400" height="400"></canvas>
        </div>
        <div className="column">
          {subStep === 0 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
ctx.restore();                    
`}
            />
          )}
          {subStep === 1 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
drawRedRectangle(ctx);
ctx.restore();
`}
            />
          )}
          {subStep === 2 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
ctx.globalCompositeOperation = "multiply";
drawRedRectangle(ctx);
ctx.restore();
`}
            />
          )}
          {subStep === 3 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
ctx.globalCompositeOperation = "source-out";
drawRedRectangle(ctx);
ctx.restore();
`}
            />
          )}
          {subStep === 4 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
ctx.globalCompositeOperation = "hue";
drawRedRectangle(ctx);
ctx.restore();
`}
            />
          )}
          {subStep === 5 && (
            <Code
              code={`
ctx.save();
drawBlueRectangle(ctx);
ctx.globalAlpha = 0.5;
drawRedRectangle(ctx);
ctx.restore();
`}
            />
          )}
        </div>
      </div>
    </>
  );
};
