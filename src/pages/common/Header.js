import React, { useState, useEffect, useRef } from 'react';
import Label from '../../component/atoms/label/Label';
import Button from '../../component/atoms/button/Button';
import useTradeContext from '../../context/useTradeContext';
import Axios from 'axios';

const Header = props => {
  const { searchQuery, baseURL } = useTradeContext();
  const { state, action } = searchQuery;
  const { setName, setRegion, setSigungu, setSearchKeyword } = action;
  const [ regionList, setRegionList ] = useState([]);
  const [ sigunguList, setSigunguList ] = useState([]);
  const [ searchHistory, setSearchHistory ] = useState([]);

  const searchInput = useRef();

  const [ isSearchBoxShow, setSearchBoxShow ] = useState(false);

  const fetchSearchHistory = async() => {
    // const response = await Axios.get(`${baseURL}/search/history`, {
    //   withCredentials: true
    // });
    // const result = await response.data;
    // const data = result.list;
    // setSearchHistory(data);
  }

  const fetchCityCode = async type => {
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
    fetchSearchHistory();
  }, [ ]);
  
  useEffect(() => {
    fetchCityCode(1);
  }, [ state.region ]);

  const handleClickRegion = item => e => {
    setSearchKeyword(item.name);
    setRegion(item.region)
    setSigungu(0);
  }

  const handleClickSigungu = item => e => {
    setSearchKeyword(state.searchKeyword.split(' ')[0] + ' ' + item.name);
    setSigungu(item.sigungu)
    setSearchBoxShow(false);
  }

  const handleSearchInputClick = e => {
    setSearchBoxShow(true);
  }

  return (
    <div className="header">
      <div className="header-search">
      <div className="search-box-overlay" style={{display: isSearchBoxShow ? 'block' : 'none'}} onClick={e => setSearchBoxShow(false)}></div>

      <div className="search-input" onClick={handleSearchInputClick}>
        <i className="material-icons">search</i>
        <input type="search" placeholder="지역 선택" style={{border: 0}} ref={searchInput} value={state.searchKeyword} />
      </div>

      <div className="search-box" style={{display: isSearchBoxShow ? 'flex' : 'none'}}>
        <div className="search-box-left">
          <div className="search-box-region">
            {
              regionList.map((item, index) => {
                return (
                  <Button isSelected={state.region === item.region} onClick={handleClickRegion(item)} style={{padding: '20px'}}> { item.name } </Button>
                )
              })
            }
          </div>
          <div className="search-box-sigungu">
            {
              sigunguList.map((item, index) => {
                return (
                  <Button isSelected={state.region === item.region & state.sigungu === item.sigungu} onClick={handleClickSigungu(item)} style={{padding: '20px'}}> { item.name } </Button>
                )
              })
            }
          </div>
        </div>
        <div className="search-box-right">
          <Label fontSize={14}>최근 검색 지역</Label>
          <div className="search-recent">
            {
              searchHistory.map((item, index) => {
                return (
                  <div> 
                    <Label> { item.keyword } </Label>
                    <Label> { item.createDate } </Label>
                  </div>
                )
              })
            }
          </div>
          <Label fontSize={14}>인기 검색 지역</Label>
          <div className="search-pop">

          </div>
        </div>
      </div>
      </div>
      
      {/* <nav className="nav">
        <div className="navbar">
          <a className="nav-link">
            아파트 거래 정보
          </a>
          <a className="nav-link">
            오피스텔 거래 정보
          </a>
          <a className="nav-link">
            단독/다가구 거래 정보
          </a>
        </div>
      </nav> */}
      {/* <i className="material-icons" style={{fontSize: '50px'}}>list</i> */}

    </div>
  )
}

export default Header;