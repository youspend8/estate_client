import React from 'react';

const InputText = props => {
  const { onChange, onKeyUp, style } = props;
  return <input type="text" className="input-text" onKeyUp={onKeyUp} onChange={onChange} style={style} />
}

export default InputText;