import React, { FC } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
interface Props {
  code: string;
}

const App: FC<Props> = (props) => {
  const preStyle = {
    textAlign: 'left',
    margin: '1em 0',
    padding: '0.5em',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const lineStyle = {
    display: 'table-row',
  };

  const lineNoStyle = {
    display: 'table-cell',
    textAlign: 'right',
    paddingRight: '1em',
    userSelect: 'none',
    opacity: '0.5',
  };

  const lineContentStyle = {
    display: 'table-cell',
    userSelect: 'text',
  };
  return (
    <Highlight {...defaultProps} code={props.code} language="jsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <span
              style={...lineStyle}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <span style={{ ...lineNoStyle }}>{i + 1}</span>
              <span style={{ ...lineContentStyle }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </span>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default App;
