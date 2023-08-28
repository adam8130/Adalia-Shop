type BreakLinedTextProps = {
  text: string;
  config?: {
    symbols?: string[];
    keepSymbol?: boolean;
  }
};

export const breakLinedText = (
  text: string,
  config: BreakLinedTextProps['config'] = {}
) => {
  const symbols = config.symbols || ['. ', '。'];
  const keepSymbol = config.keepSymbol !== undefined ? config.keepSymbol : true;

  const escapedSymbols = symbols.map(symbol => {
    return symbol.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  });

  const regex = new RegExp(`(${escapedSymbols.join('|')})`, 'g');
  const parts = text.split(regex);
  const result = [];

  for (let i = 0; i < parts.length; i += 2) {
    result.push(parts[i]);
    if (i + 1 < parts.length) {
      keepSymbol && result.push(parts[i + 1]);
      result.push(<br key={i} />);
    }
  }

  return result;
}
