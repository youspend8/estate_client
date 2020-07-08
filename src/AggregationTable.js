import React from 'react';

const AggregationTable = props => {
  const { list, priceAvg, countSum } = props.data;

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
            list ? list.map((item, index) => {
              return (
                <tr key={index}>
                  <td> { index + 1 } </td>
                  <td> { item.dong } </td>
                  <td> { item.price.toLocaleString(undefined, {maximumFractionDigits: 0}) + '만원' } </td>
                  <td> { item.count + '건' } </td>
                </tr>
              )
            }) : ''
          }
          <tr>
            <td style={{backgroundColor: '#fff0f3'}}>평균</td>
            <td style={{backgroundColor: '#fff0f3'}}></td>
            <td style={{backgroundColor: '#fff0f3'}}> { priceAvg ? priceAvg.toLocaleString(undefined, {maximumFractionDigits: 0}) + '만원' : '' } </td>
            <td style={{backgroundColor: '#fff0f3'}}></td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#fff0f3'}}>총합</td>
            <td style={{backgroundColor: '#fff0f3'}}></td>
            <td style={{backgroundColor: '#fff0f3'}}></td>
            <td style={{backgroundColor: '#fff0f3'}}> { countSum ? countSum + '건' : '' } </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default AggregationTable;