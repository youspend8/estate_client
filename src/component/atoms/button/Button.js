import React from 'react';

const Button = props => {
  const { children, onClick, style } = props;

  return (
    <button className="button" type="button" onClick={onClick} style={style}> { children } </button>
  )
}

export default Button;