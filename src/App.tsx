import { useNavigate, useParams } from "react-router";
import "./App.css";
import { slides } from "./slides/slides";
import { TheEnd } from "./slides/IntroAndOutro/TheEnd";

function App() {
  const navigate = useNavigate();
  const { currentStep } = useParams();
  let step = Number(currentStep);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      const numberOfSlides = Object.keys(slides).length;
      step = Math.min(numberOfSlides, step + 1);
      navigate(`/${step}`);
    }
    if (e.key === "ArrowLeft") {
      const nextStep = Math.max(0, step - 1);
      step = nextStep;
      navigate(`/${nextStep}`);
    }
  });

  const Slide = slides[step] || TheEnd;
  return <Slide />;
}

export default App;
