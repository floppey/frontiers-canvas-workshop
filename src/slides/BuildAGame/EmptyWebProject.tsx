import { Code } from "../../components/Code";

export const EmptyWebProject: React.FC = () => {
  return (
    <>
      <h1>Lag en basic web app</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            language="xml"
            code={`
<html>
  <body>
    <canvas id="canvas" />
    <script src="/index.js"></script>
  </body>
</html>
`}
          />
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};
