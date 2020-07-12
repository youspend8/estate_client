import React from 'react';

const RadioItem = props => {
  const { item, isSelected, onClick } = props;

  return (
    <button className={"radio-item" + (isSelected ? " radio-item-selected" : "")} onClick={onClick}>
      {
        item.name
      }
    </button>
  )
}

export default RadioItem;