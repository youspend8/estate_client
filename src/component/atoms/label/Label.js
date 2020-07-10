import React from 'react';

const Label = props => {
  const { children, isBold, color, onClick, isPointer, fontSize } = props;
  
  return (
    <label className={"label" + (isBold ? " bold" : "")} onClick={onClick} style={{
      fontWeight: isBold ? 'bold' : '',
      color: color,
      cursor: isPointer ? 'pointer' : '',
      fontSize: fontSize
    }}>
    {
      children
    }
    </label>
  )
}

export default Label;