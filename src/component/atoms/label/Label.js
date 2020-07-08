import React from 'react';

const Label = props => {
  const { children, isBold, color, onClick } = props;
  
  return (
    <label className={"label" + (isBold ? " bold" : "")} onClick={onClick} style={{
      fontWeight: isBold ? 'bold' : '',
      color: color
    }}>
    {
      children
    }
    </label>
  )
}

export default Label;