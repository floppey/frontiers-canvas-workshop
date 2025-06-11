import { Code } from "../../components/Code";

export const Classes: React.FC = () => {
  return (
    <>
      <h1>Classes</h1>
      <div className="side-by-side">
        <div className="column">
          <Code
            code={`
class Foo {
  bar: string;
  
  constructor(bar: string) {
    this.bar = bar;
  }
}
`}
          />
        </div>
      </div>
    </>
  );
};
