import React from 'react';
import InputText from './component/atoms/input/InputText';

const SearchInputName = props => {
  const { onChange, onKeyUp, style } = props;
  return (
    <>
      <InputText onChange={onChange} onKeyUp={onKeyUp} style={style} />
    </>
  )
}

export default SearchInputName;