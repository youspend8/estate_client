import React, { useState, useEffect } from 'react';

const Pagination = ({ page, totalPage, onChange }) => {
  const handleLinkClick = page => e => {
    if (onChange != null) {
      onChange(page)
    }
  }

  const [ array, setArray ] = useState([]);

  useEffect(() => {
    const start = page - 4;
    const end = page + 4 <= totalPage ? page + 4 : totalPage;
    const temp = [];
  
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    setArray(temp);
  }, [ page, totalPage ]);

  return (
    <ul className="pagination">
      {
        page > 1 ? <li className="page-link" onClick={handleLinkClick(page - 1)}>&lt;</li> : ''
      }
      {
        array.map((item, index) => {
          if (item > 0) {
            return (
              <li className={`page-link ${page === item ? 'current' : ''}`} onClick={handleLinkClick(item)}> { item } </li>
            )
          }
        })
      }
      {
        page < totalPage ? <li className="page-link" onClick={handleLinkClick(page + 1)}>&gt;</li> : ''
      }
    </ul>
  )
}

export default Pagination;