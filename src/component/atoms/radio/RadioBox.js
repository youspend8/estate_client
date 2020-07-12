import React, { useState } from 'react';
import RadioItem from './RadioItem';

const RadioBox = props => {
  const { items, onChange, width } = props;

  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ selectedItem, setSelectedItem ] = useState(items[selectedIndex]);

  const handleSelect = (item, index) => e => {
    setSelectedItem(item);
    setSelectedIndex(index);
    if (onChange != null) {
      onChange(item);
    }
  }

  return (
    <div className="radio-box" style={{width: width}}>
      {
        items.map((item, index) => {
          return (
            <RadioItem item={item} isSelected={index == selectedIndex} onClick={handleSelect(item, index)} />
          )
        })
      }
    </div>
  )
}

export default RadioBox;