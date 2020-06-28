import React from 'react';
import Pagination from './component/pagination/Pagination';

const SearchTable = ({ data, pagination }) => {
  const { page, end, onPageChange, onSizeChange } = pagination;
  return (
    <div>
      <select onChange={onSizeChange}>
        <option value={10}>10개</option>
        <option value={20}>20개</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>UID</th>
            <th>이름</th>
            <th>년</th>
            <th>월</th>
            <th>일</th>
            <th>거래일자</th>
            <th>거래가격</th>
            <th>면적</th>
            <th>시군구</th>
            <th>동</th>
            <th>거래유형</th>
          </tr>
        </thead>
        <tbody>
        {
          data ? data.map((item, index) => {
            return (
              <tr>
                <td> { index } </td>
                <td> { item.uid } </td>
                <td> { item.name } </td>
                <td> { item.dealYear } </td>
                <td> { item.dealMonth } </td>
                <td> { item.dealDay } </td>
                <td> { item.dealDate } </td>
                <td> { item.amount } </td>
                <td> { item.area } </td>
                <td> { item.sigungu } </td>
                <td> { item.dong } </td>
                <td> { item.tradeType } </td>
              </tr>
            )
          }) : ''
        }
        </tbody>
      </table>
      <Pagination page={page} end={end} onChange={onPageChange} />
    </div>
  )
}

export default SearchTable;