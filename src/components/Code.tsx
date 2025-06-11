import "highlight.js/styles/a11y-dark.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

interface CodeProps {
  code: string;
  fontSize?: "tiny" | "small" | "medium" | "large";
  language?: "typescript" | "xml";
}

export const Code: React.FC<CodeProps> = ({
  code,
  fontSize = "medium",
  language = "typescript",
}) => {
  const cleanCode = code.replace(/^\s+|\s+$/g, "");
  const highlightedCode = hljs.highlight(cleanCode, {
    language,
  }).value;

  return (
    <pre className={`hljs code code--${fontSize}`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
    </pre>
  );
};
