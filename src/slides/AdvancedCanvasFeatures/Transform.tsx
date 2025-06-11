import { useEffect, useRef } from "react";
import { Code } from "../../components/Code";
import { SlideProps } from "../slides";

export const Transform: React.FC<SlideProps> = ({ subStep }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
      ctx.save();
      ctx.translate(ctx.canvas.width / 2, (ctx.canvas.height - 100) / 2);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    };
    const drawGreenRectangle = (ctx: CanvasRenderingContext2D) => {
      // draw a skewed rectangle
      ctx.save();
      /*
      The transform method applies a transformation matrix to the current context.
      The matrix is defined by six values: a, b, c, d, e, f.
      The transformation matrix looks like this:
      [ a  c  e ]
      [ b  d  f ]
      [ 0  0  1 ]
      In this case, the values are:
      a (1): Horizontal scaling
      b (0.5): Horizontal skewing
      c (0.5): Vertical skewing
      d (1): Vertical scaling
      e (-50): Horizontal translation
      f (-50): Vertical translation
      */
      ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.transform(1, 0.5, 0.5, 1, -50, -50);
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    };
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (subStep === 0) {
          drawBlueRectangle(ctx);
        } else if (subStep === 1) {
          drawRedRectangle(ctx);
        } else if (subStep === 2) {
          drawGreenRectangle(ctx);
        }
      }
    }
  }, [canvasRef, subStep]);

  return (
    <>
      <h1>Translate, Rotate and Transform</h1>
      <div className="side-by-side">
        <div className="column">
          <canvas ref={canvasRef} width="400" height="400"></canvas>
        </div>
        <div className="column">
          {subStep === 0 && (
            <Code
              code={`
ctx.fillStyle = "blue";
ctx.fillRect(
  (canvas.width - 100) / 2,
  (canvas.height - 100) / 2,
  100,
  100
);`}
            />
          )}
          {subStep === 1 && (
            <Code
              code={`
ctx.save();
ctx.translate(
  canvas.width / 2,
  (canvas.height - 100) / 2
);
ctx.rotate(Math.PI / 4);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);
ctx.restore();
                    `}
            />
          )}
          {subStep === 2 && (
            <Code
              code={`
ctx.save();
ctx.translate(
  ctx.canvas.width / 2,
  ctx.canvas.height / 2
);
ctx.transform(1, 0.5, 0.5, 1, -50, -50);
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 100, 100);
ctx.restore();
`}
            />
          )}
        </div>
      </div>
    </>
  );
};
