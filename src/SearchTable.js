import React from 'react';
import Pagination from './component/pagination/Pagination';
import Table from './component/organisms/table/Table';

const SearchTable = ({ data, pagination }) => {
  const { page, end, size, onPageChange, onSizeChange } = pagination;
  return (
    <div>
      <select onChange={onSizeChange}>
        <option value={10}>10개</option>
        <option value={20}>20개</option>
      </select>
      <label>거래일 최근순</label>
      <label>거래가 높은순</label>
      <label>면적 넓은순</label>
      <Table minWidth={'800px'}>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
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
              <tr key={index}>
                <td> { ((page - 1) * size) + (index + 1) } </td>
                <td> { item.name } </td>
                <td> { `${item.dealYear}년 ${item.dealMonth}월 ${item.dealDay}일` } </td>
                <td> { item.amount >= 10000 ? (item.amount / 10000).toLocaleString(undefined, {maximumFractionDigits: 1}) + '억' : item.amount.toLocaleString() + '만' } </td>
                <td> { (item.area / 3.3).toLocaleString(undefined, {maximumFractionDigits: 1}) + '평' } </td>
                <td> { item.sigungu } </td>
                <td> { item.dong } </td>
                <td> { item.tradeType } </td>
              </tr>
            )
          }) : ''
        }
        </tbody>
      </Table>
      <Pagination page={page} end={end} onChange={onPageChange} />
    </div>
  )
}

export default SearchTable;