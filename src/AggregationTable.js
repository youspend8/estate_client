import React from 'react';

const AggregationTable = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>시군구</th>
            <th>평당가격</th>
            <th>거래건수</th>
          </tr>
        </thead>
        <tbody>
        {
          data ? data.map((item, index) => {
            return (
              <tr>
                <td> { index } </td>
                <td> { item.dong } </td>
                <td> { item.price.toFixed(0) + '만원' } </td>
                <td> { item.count + '건' } </td>
              </tr>
            )
          }) : ''
        }
        </tbody>
      </table>
    </>
  )
}

export default AggregationTable;