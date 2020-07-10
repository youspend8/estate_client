import React from 'react';

const Button = props => {
  const { children, onClick, style, isSelected } = props;

  return (
    <button className={"button " + (isSelected ? 'selected' : '')} type="button" onClick={onClick} style={style}> { children } </button>
  )
}

export default Button;