import React from 'react';

const Button = ({onButtonClick, ...props}) => {
  return <button type="submit">{props.children}</button>;
};

export default Button;