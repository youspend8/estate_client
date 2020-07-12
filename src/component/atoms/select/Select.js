import React from 'react';

const Select = props => {
  const { children, onChange, style } = props;

  return (
    <select className="select" onChange={onChange} style={style}>
      {
        children
      }
    </select>
  )
}

export default Select;