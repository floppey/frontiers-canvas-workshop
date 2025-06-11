import { useEffect, useRef } from "react";

export const Playground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let intervalId = -1;
    let step = 0;
    const render = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.fillStyle = "#FF0000";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          let xOffset = (step % 1000) * 0.02;
          let yOffset = (step % 1000) * 0.02;

          const canvasLeft = -xOffset;
          const canvasRight = canvas.width + xOffset;
          const canvasTop = -yOffset;
          const canvasBottom = canvas.height + yOffset;

          // Draw top part of logo
          ctx.fillStyle = "#7a1111";
          ctx.moveTo(canvasLeft, yOffset + canvas.height * 0.8);
          // slightly curved line towards the middle, then arching upwards
          ctx.bezierCurveTo(
            xOffset + canvas.width * 0.4,
            yOffset + canvas.height * 0.6,
            xOffset + canvas.width * 0.5,
            yOffset + canvas.height * 0.5,
            xOffset + canvas.width * 0.6,
            canvasTop
          );
          ctx.lineTo(canvasLeft, canvasTop);
          ctx.fill();

          // Draw bottom part of logo

          xOffset *= -1;
          yOffset *= -1;

          ctx.fillStyle = "#dd4141";
          ctx.beginPath();
          ctx.moveTo(xOffset + canvas.width * 0.8, canvasTop);
          ctx.bezierCurveTo(
            xOffset + canvas.width * 0.6,
            yOffset + canvas.height * 0.2,
            xOffset + canvas.width * 0.6,
            yOffset + canvas.height * 0.5,
            xOffset + canvas.width * 0.3,
            canvasBottom
          );

          ctx.lineTo(xOffset + canvas.width * 0.45, canvasBottom);

          ctx.bezierCurveTo(
            xOffset + canvas.width * 0.45,
            canvasBottom,
            xOffset + canvas.width * 0.6,
            yOffset + canvas.height * 0.6,
            canvasRight,
            yOffset + canvas.height * 0.55
          );
          ctx.lineTo(canvasRight, canvasTop);

          ctx.fill();
        }
      }
      intervalId = requestAnimationFrame(render);
      step++;
      if (step > 1000) {
        step = 0;
      }
    };

    render();

    return () => {
      cancelAnimationFrame(intervalId);
    };
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} width="800" height="500"></canvas>
    </>
  );
};
