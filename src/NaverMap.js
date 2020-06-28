import React, { useEffect } from 'react';

const NaverMap = props => {
  useEffect(() => {
    var mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    
    var map = new window.naver.maps.Map('map', mapOptions);
  }, []);

  return (
    <div>
      <div id="map" style={{width: '100%', height: '400px'}}></div>
    </div>
  )
}

export default NaverMap;