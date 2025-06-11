import { useEffect, useRef } from "react";

export const PaperPlaneGuide: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let intervalId = -1;
    const img = new Image();
    img.src = "/paper-plane.jpg";

    img.onload = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let step = 0;
        const text = "YOU'VE GOT TO DO IT YOURSELF";
        const colors = Array.from({ length: text.length }, (_, i) => {
          const hue = (i / text.length) * 360;
          return `hsl(${hue}, 100%, 50%)`;
        });
        if (ctx) {
          intervalId = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = "center";

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            ctx.font = "40px Comic Sans MS";
            for (let i = 0; i < step; i++) {
              if (!text[i]) {
                continue;
              }
              ctx.fillStyle = colors[i];

              const angle = (Math.PI / (text.length - 1)) * i - Math.PI;
              const x = canvas.width / 2 + Math.cos(angle) * 300;
              const y = canvas.height / 1.25 + Math.sin(angle) * 300;
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(angle + Math.PI / 2);
              ctx.fillText(text[i], 0, 0);
              ctx.restore();
            }
            step++;

            if (step > text.length + 10) {
              step = 0;
            }
          }, 250);
        }
      }
    };

    return () => {
      clearInterval(intervalId);
    };
  }, [canvasRef]);

  return (
    <>
      <h1>If you want something done right..</h1>
      <canvas ref={canvasRef} width="800" height="500"></canvas>
    </>
  );
};
