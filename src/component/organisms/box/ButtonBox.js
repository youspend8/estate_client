import React from 'react';

const ButtonBox = props => {
  const { children } = props;

  return (
    <div className="button-box">
    {
      children
    }
    </div>
  )
}

export default ButtonBox;