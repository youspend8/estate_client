import React from 'react';

const SearchTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>거래가격</th>
            <th>면적</th>
            <th>시군구</th>
            <th>동</th>
          </tr>
        </thead>
        <tbody>
        {
          data ? data.map((item, index) => {
            return (
              <tr>
                <td> { index } </td>
                <td> { item.name } </td>
                <td> { item.amount } </td>
                <td> { item.area } </td>
                <td> { item.sigungu } </td>
                <td> { item.dong } </td>
              </tr>
            )
          }) : ''
        }
        </tbody>
      </table>
    </div>
  )
}

export default SearchTable;