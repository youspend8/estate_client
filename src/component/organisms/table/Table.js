import React from 'react';

const Table = props => {
  const { children } = props;

  return (
    <div className="table-wrapper">
      <table style={props}>
      {
        children
      }
      </table>
    </div>
  )
}

export default Table;