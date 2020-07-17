import React, { useState } from 'react';
import Pagination from './component/pagination/Pagination';
import Table from './component/organisms/table/Table';
import Label from './component/atoms/label/Label';
import Container from './component/atoms/container/Container';

const SearchTable = ({ data, listType, pagination }) => {
  const { 
    page, 
    end, 
    size, 
    totalPage, 
    onPageChange, 
    onSizeChange, 
    onSortChange 
  } = pagination;

  const upward = () => <i className="icon material-icons" style={{fontSize: '18px'}}>arrow_upward</i>
  const downward = () => <i className="icon material-icons" style={{fontSize: '18px'}}>arrow_downward</i>

  const handleSortChange = item => e => {    
    sortOption
      .filter(x => x.title !== item.title)
      .filter(x => x.mode !== 'none')
      .forEach(x => x.mode = 'none');

    if (item.mode === 'none') {
      item.mode = 'desc';
    } else if (item.mode === 'desc') {
      item.mode = 'asc';
    } else if (item.mode === 'asc') {
      item.mode = 'desc';
    }
    setSortOption([...sortOption]);
    onSortChange(item);
  }

  const [ sortOption, setSortOption ] = useState([
    {
      type: 'dealDate',
      mode: 'none',
      title: '거래일',
    },
    {
      type: 'area',
      mode: 'none',
      title: '면적',
    },
    {
      type: 'amount',
      mode: 'desc',
      title: '거래가격',
    }
  ]);

  return (
    <>
      <Container
        align='right'
      >
        {
          sortOption.map((item, index) => {
            return (
              <Label onClick={handleSortChange(item)} isBold={item.mode !== 'none'} color={item.mode !== 'none' ? 'black' : ''} isPointer={true}> 
                {
                  item.title 
                } 
                {
                  item.mode === 'none' ? '' : item.mode === 'desc' ? downward() : upward()
                }
              </Label>
            )
          })
        }
      </Container>
      <Table minWidth={'800px'}>
        <thead>
          {
            listType === 'rent' ? (
              <tr>
                <th style={{width: '50px'}}>#</th>
                <th style={{width: '150px'}}>이름</th>
                <th style={{width: '125px'}}>거래일자</th>
                <th style={{width: '75px'}}>보증금</th>
                <th style={{width: '75px'}}>월세</th>
                <th style={{width: '75px'}}>건축년도</th>
                <th style={{width: '50px'}}>면적</th>
                <th style={{width: '50px'}}>층</th>
                <th style={{width: '75px'}}>시군구</th>
                <th style={{width: '75px'}}>동</th>
                {/* <th>거래유형</th> */}
              </tr>
            ) : (
              <tr>
                <th style={{width: '50px'}}>#</th>
                <th style={{width: '150px'}}>이름</th>
                <th style={{width: '125px'}}>거래일자</th>
                <th style={{width: '75px'}}>거래가격</th>
                <th style={{width: '75px'}}>건축년도</th>
                <th style={{width: '50px'}}>면적</th>
                <th style={{width: '50px'}}>층</th>
                <th style={{width: '75px'}}>시군구</th>
                <th style={{width: '75px'}}>동</th>
                {/* <th>거래유형</th> */}
              </tr>
            )
          }
        </thead>
        <tbody>
        {
          data ? data.map((item, index) => {
            return listType === 'rent' ? (
              <tr key={index}>
                <td style={{width: '50px'}}> { ((page - 1) * size) + (index + 1) } </td>
                <td style={{width: '150px'}}> { item.name } </td>
                <td style={{width: '125px'}}> { `${item.dealYear}-${item.dealMonth < 10 ? '0' : ''}${item.dealMonth}-${item.dealDay < 10 ? '0' : ''}${item.dealDay}` } </td>
                <td style={{width: '75px'}}> { item.amount >= 10000 ? (item.amount / 10000).toLocaleString(undefined, {maximumFractionDigits: 1}) + '억' : item.amount.toLocaleString() + '만' } </td>
                <td style={{width: '75px'}}> 
                  { item.amountOption == null || item.amountOption == 0 ? '-' : item.amountOption >= 10000 ? (item.amountOption / 10000).toLocaleString(undefined, {maximumFractionDigits: 1}) + '억' : item.amountOption.toLocaleString() + '만' } 
                </td>
                <td style={{width: '75px'}}> { item.buildYear } </td>
                <td style={{width: '50px'}}> { (item.area / 3.3).toLocaleString(undefined, {maximumFractionDigits: 1}) + '평' } </td>
                <td style={{width: '75px'}}> { item.floor } </td>
                <td style={{width: '75px'}}> { item.sigungu } </td>
                <td style={{width: '75px'}}> { item.dong } </td>
                {/* <td style={{width: '200px'}}> { item.tradeType } </td> */}
              </tr>
            ) : (
              <tr key={index}>
                <td style={{width: '50px'}}> { ((page - 1) * size) + (index + 1) } </td>
                <td style={{width: '150px'}}> { item.name } </td>
                <td style={{width: '125px'}}> { `${item.dealYear}-${item.dealMonth < 10 ? '0' : ''}${item.dealMonth}-${item.dealDay < 10 ? '0' : ''}${item.dealDay}` } </td>
                <td style={{width: '75px'}}> { item.amount >= 10000 ? (item.amount / 10000).toLocaleString(undefined, {maximumFractionDigits: 1}) + '억' : item.amount.toLocaleString() + '만' } </td>
                <td style={{width: '75px'}}> { item.buildYear } </td>
                <td style={{width: '50px'}}> { (item.area / 3.3).toLocaleString(undefined, {maximumFractionDigits: 1}) + '평' } </td>
                <td style={{width: '75px'}}> { item.floor } </td>
                <td style={{width: '75px'}}> { item.sigungu } </td>
                <td style={{width: '75px'}}> { item.dong } </td>
                {/* <td style={{width: '200px'}}> { item.tradeType } </td> */}
              </tr>
            )
          }) : ''
        }
        </tbody>
      </Table>
      <Pagination page={page} end={end} totalPage={totalPage} onChange={onPageChange} />
    </>
  )
}

export default SearchTable;