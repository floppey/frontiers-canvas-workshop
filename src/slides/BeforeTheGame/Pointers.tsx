import { Code } from "../../components/Code";

export const Pointers: React.FC = () => {
  return (
    <>
      <h1>Pointers</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
setState({ ...state, key: value });
`}
          />
        </div>
      </div>
    </>
  );
};
