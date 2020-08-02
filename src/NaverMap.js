import React, { useEffect } from 'react';

let map;

const NaverMap = props => {
  const { data } = props;

  useEffect(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    
    map = new window.naver.maps.Map('map', mapOptions);
  }, []);

  useEffect(() => {
    console.log('change')
    data.forEach(item => {
      const { latitude, longitude } = item.coordinates;

      let marker = new window.naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: map
      });
    });
  }, [ data ]);

  return (
    <div>
      <div id="map" style={{width: '100%', height: '400px'}}></div>
    </div>
  )
}

export default NaverMap;