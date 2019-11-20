import React from 'react';

const Button = ({onButtonClick, ...props}) => {
  return <button>{props.children}</button>;
};

export default Button;