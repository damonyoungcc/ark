import React, { FC } from 'react';

const Footer: FC<HTMLDivElement> = (props) => {
  return <div className="ark-layout-footer">{props.children}</div>;
};

export default Footer;
