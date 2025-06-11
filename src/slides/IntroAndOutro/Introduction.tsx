import { SlideProps } from "../slides";

export const Introduction: React.FC<SlideProps> = ({ subStep }) => {
  return (
    <>
      <h1>Paper airplane</h1>
      <ul>
        <li>Boys aged 3 and 6 demand paper airplanes of the highest quality</li>
        <li>Paper airplanes are difficult</li>
        <li>Documentation on the internet is poor</li>
      </ul>

      <div className="side-by-side">
        {subStep === 0 ? (
          <div className="column">
            <img src="happy-boys.png" alt="Happy" />
          </div>
        ) : (
          <div className="column">
            <img src="sad-boys.png" alt="Sad" />
          </div>
        )}
      </div>
    </>
  );
};
