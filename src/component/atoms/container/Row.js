import React from 'react';

const Row = props => {
  const { children } = props;
  const {
    width,
    align,
    margin
  } = props;

  return (
    <div className="row" style={{justifyContent: align ? align === 'left' ? 'flex-start' : 'flex-end' : '', margin: margin, width: width}}>
    {
      children
    }
    </div>
  )
}

export default Row;
