export const FlappyBirdClone: React.FC = () => {
  return (
    <>
      <h1>
        Flappy <span style={{ textDecoration: "line-through" }}>Bird</span>{" "}
        Thing!
      </h1>
      <iframe
        src="https://johannes.grimstadgiske.no/games/flappy-thing/"
        style={{ width: "100%", height: "1000px" }}
      ></iframe>
    </>
  );
};
