import { styled } from "@mui/material";

const Root = styled("div")`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 80px 0;
  .title {
    font-size: 26px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .content {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
  }
`;

export function FieldCard({
  title,
  content,
  config = {
    symbols: [],
    keepSymbol: true,
  },
}: {
  title: string;
  content: string;
  config?: {
    symbols: string[];
    keepSymbol: boolean;
  };
}): JSX.Element {
  let symbols = (config.symbols = [". ", "。"]);
  let keepSymbol = config.keepSymbol;

  const escapedSymbols = symbols.map((symbol) => {
    return symbol.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  });

  const regex = new RegExp(`(${escapedSymbols.join("|")})`, "g");
  const parts = content.split(regex);
  const result = [];

  for (let i = 0; i < parts.length; i += 2) {
    result.push(parts[i]);
    if (i + 1 < parts.length) {
      keepSymbol && result.push(parts[i + 1]);
      result.push(<br key={i} />);
    }
  }
  return (
    <Root>
      <div className="title">{title}</div>
      <div className="content">{result}</div>
    </Root>
  );
}
