import { SlideProps } from "../slides";

export const Introduction: React.FC<SlideProps> = ({ subStep }) => {
  return (
    <>
      <h1>Papirfly</h1>
      <ul>
        <li>Gutter på 3 og 6 år krever papirfly av ypperste kvalitet</li>
        <li>Papirfly er vanskelig</li>
        <li>Dokumentasjon på internett er dårlig</li>
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
