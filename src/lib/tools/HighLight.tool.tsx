import React, { FC } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
interface Props {
  code: string;
}

const App: FC<Props> = (props) => {
  let preStyle = {
    textAlign: 'left',
    margin: '0',
    padding: '1.5em',
    fontSize: '14px',
  };

  const lineStyle = {
    display: 'table-row',
  };

  // const lineNoStyle = {
  //   display: 'table-cell',
  //   textAlign: 'right',
  //   paddingRight: '1em',
  //   userSelect: 'none',
  //   opacity: '0.5',
  // };

  const lineContentStyle = {
    display: 'table-cell',
    userSelect: 'text',
  };

  return (
    <Highlight {...defaultProps} code={props.code} language="tsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const styless = {...style, ...preStyle};
        return (
          <pre className={className} style={styless as React.CSSProperties}>
            {tokens.map((line, i) => (
              <div
                style={lineStyle as React.CSSProperties}
                key={i}
                {...getLineProps({ line, key: i })}
              >
                {/* <span style={lineNoStyle as React.CSSProperties}>{i + 1}</span> */}
                <span style={lineContentStyle as React.CSSProperties}>
                  <code>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </code>
                </span>
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default App;
