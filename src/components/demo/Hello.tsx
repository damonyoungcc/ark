import React from 'react';

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  console.log(props.children);
  return <h2>{props.message}</h2>;
};

Hello.defaultProps = {
  message: 'Hello World',
};

export default Hello;
