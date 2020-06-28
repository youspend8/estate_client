import React, { useState, useEffect } from 'react';
import './Pagination.css';

const Pagination = ({ page, total, onChange }) => {
  const handleLinkClick = page => e => {
    if (onChange != null) {
      onChange(page)
    }
  }

  const [ array, setArray ] = useState([]);

  useEffect(() => {
    const start = page - 4;
    const end = page + 5;
    const temp = [];
  
    for (let i = start; i < end; i++) {
      temp.push(i);
    }
    setArray(temp);

    console.log(array)
  }, [ page ]);

  return (
    <ul className="pagination">
      <li className="page-link">&lt;</li>
      {
        array.map((item, index) => {
          if (item > 0) {
            return (
              <li className={`page-link ${page === item ? 'current' : ''}`} onClick={handleLinkClick(item)}> { item } </li>
            )
          }
        })
      }
      <li className="page-link">&gt;</li>
    </ul>
  )
}

export default Pagination;