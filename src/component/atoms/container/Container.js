import React from 'react';

const Container = props => {
  const { children } = props;
  const {
    align,
    margin
  } = props;

  return (
    <div className="container" style={{textAlign: align, margin: margin}}>
    {
      children
    }
    </div>
  )
}

export default Container;
