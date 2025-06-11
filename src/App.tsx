import "./App.css";
import { slides } from "./slides/slides";
import { TheEnd } from "./slides/IntroAndOutro/TheEnd";
import { useEffect, useState } from "react";

function App() {
  const [step, setStep] = useState<number>(0);
  const [subStep, setSubStep] = useState<number>(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const numberOfSlides = Object.keys(slides).length;
        const nextStep = Math.min(numberOfSlides - 1, step + 1);
        setSubStep(0);
        setStep(nextStep);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const nextStep = Math.max(0, step - 1);

        setSubStep(0);
        setStep(nextStep);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSubStep(subStep + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSubStep(Math.max(0, subStep - 1));
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [step, subStep]);

  const Slide = slides[step] || TheEnd;
  return <Slide subStep={subStep} />;
}

export default App;
