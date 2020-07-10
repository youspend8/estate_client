import React from 'react';
import Container from './component/atoms/container/Container';
import Label from './component/atoms/label/Label';

const Header = props => {
  return (
    <div className="header">
      <div className="search-input">
        <i className="material-icons">search</i>
        <input type="search" placeholder="검색할 지역" style={{border: 0}} />
      </div>

      <div className="search-box">
        <div className="search-box-left">

        </div>
        <div className="search-box-right">
          
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