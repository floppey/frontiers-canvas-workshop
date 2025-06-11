export const Demo: React.FC = () => {
  return (
    <>
      <h1>Demo time!</h1>

      <ul>
        {[
          "td.nat20.no",
          "mapgenerator.nat20.no",
          "adventureman.nat20.no",
          "vtt.nat20.no",
        ].map((url) => (
          <li key={url}>
            <a href={`https://${url}`} target="_blank">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
