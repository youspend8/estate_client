import React, { useState, useEffect, useRef } from 'react';
import Container from './component/atoms/container/Container';
import Label from './component/atoms/label/Label';
import Button from './component/atoms/button/Button';
import useTradeContext from './context/useTradeContext';
import Axios from 'axios';

const Header = props => {
  const { searchQuery, search, baseURL } = useTradeContext();
  const { state, action } = searchQuery;
  const { setName, setRegion, setSigungu } = action;
  const [ regionList, setRegionList ] = useState([]);
  const [ sigunguList, setSigunguList ] = useState([]);
  const searchInput = useRef();

  const fetchCityCode = async(type) => {
    const response = await Axios.get(`${baseURL}/city/search`, {
      params: {
        type: type,
        region: state.region,
        sigungu: state.sigungu
      }
    });
    const result = await response.data;

    if (type == 0) {
      setRegionList(result);
    } else if (type == 1) {
      setSigunguList(result);
    }
    return result;
  }

  useEffect(() => {
    fetchCityCode(0);
  }, [ ]);
  
  useEffect(() => {
    fetchCityCode(1);
  }, [ state.region ]);

  const handleClickRegion = item => e => {
    setRegion(item.region)
    searchInput.current.value = item.name;
  }

  const handleClickSigungu = item => e => {
    setSigungu(item.sigungu)
    searchInput.current.value = searchInput.current.value.split(' ')[0] + ' ' + item.name;
  }

  return (
    <div className="header">
      <div className="search-input">
        <i className="material-icons">search</i>
        <input type="search" placeholder="검색할 지역" style={{border: 0}} ref={searchInput} />
      </div>

      <div className="search-box">
        <div className="search-box-left">
          <div className="search-box-region">
            {
              regionList.map((item, index) => {
                return (
                  <Button isSelected={state.region === item.region} onClick={handleClickRegion(item)}> { item.name } </Button>
                )
              })
            }
          </div>
          <div className="search-box-sigungu">
            {
              sigunguList.map((item, index) => {
                return (
                  <Button isSelected={state.sigungu === item.sigungu} onClick={handleClickSigungu(item)}> { item.name } </Button>
                )
              })
            }
          </div>
        </div>
        <div className="search-box-right">
          <Label fontSize={14}>최근 검색 지역</Label>
          <div className="search-recent">

          </div>
          <Label fontSize={14}>인기 검색 지역</Label>
          <div className="search-pop">

          </div>
        </div>
      </div>
      <nav className="nav">
        <Label>
          아파트
        </Label>
        <Label>
          오피스텔
        </Label>
        <Label>
          단독/다가구
        </Label>
      </nav>
    </div>
  )
}

export default Header;