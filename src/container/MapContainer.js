import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import Icon from '../component/Icon'
import axios from 'axios';
// import dummyData from './Dummydata';
import MapButton from './MapButton.jsx'

const { kakao } = window;

const MapContainer = (props) => {
  useEffect(() => {
    var markers = [];
    var dummypositions = [];

    let container = document.getElementById('map'),
      options = {
        center: new window.kakao.maps.LatLng(37.586272, 127.029005),
        level: 1
      };
    
    let map = new kakao.maps.Map(container, options);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var moveLatLon = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(moveLatLon);
      });
    } 
    else {
      var moveLatLon = new kakao.maps.LatLng(37.586272, 127.029005);
      map.setCenter(moveLatLon);
    }

    function displayMarker(latlngPosition, pop) {
      var imageSrc = '../component/Icon',  // pop level 별 fill color icon 분류
      imageSize = new kakao.maps.Size(50, 70),
      imageOption = {offset: new kakao.maps.Point(27, 69)};
        
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
          markerPosition = latlngPosition;
          // latlngPosition = new kakao.maps.LatLng(37.54699, 127.09598);
      
      var marker = new kakao.maps.Marker({
          position: markerPosition, 
          image: markerImage
      });
      
      marker.setMap(map); 
    }

    function displayMultipleMarkers() {
      for (var i = 0; i < dummypositions.length; i ++) {
        displayMarker(dummypositions[i].latlng, dummypositions[i].pop);
      }
    }

    function removeMarkers() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMarkers(null);
      } 
    }
    
    /* 카카오맵 키워드 검색
    function placeSearchFromHeader(keyword){
      var ps = new kakao.maps.services.Places(); 
      ps.keywordSearch(keyword, placesSearchCB); 

      function placesSearchCB (data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
              var bounds = new kakao.maps.LatLngBounds();
              for (var i=0; i<data.length; i++) {
                  displayMarkerWithText(data[i]);    
                  bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              }       
              map.setBounds(bounds);
          } 
      }

      function displayMarkerWithText(place) {
          var marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });

          kakao.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
              infowindow.open(map, marker);
          });
      }
    }

    */

    /*
    
    // var position = new window.kakao.maps.LatLng(37.586272, 127.029005);
    //  map.setCenter(position);
    // var  markerPosition = new window.kakao.maps.LatLng(37.586272, 127.029005);
    // var  marker = new window.kakao.maps.Marker({position: markerPosition});
    // marker.setMap(map);

    //   function displayMarker<T extends {name: string, location_y: number, location_x: number, active: boolean, point:number}>(data: T, i: number) {
    //     // 인포윈도우 표시될 위치(좌표)
    //     let iwPosition  = new window.kakao.maps.LatLng(data.location_y, data.location_x);

    //      // 인포윈도우에 표출될 내용. HTML 문자열이나 document element 등이 가능하다.
    //     var inactiveInfoWindow = `<div class="inactive infowindow""><span>${data.name}</span></div>`;

    //     //인포윈도우
    //     let infowindow;

    // infowindow = new window.kakao.maps.InfoWindow({
    //         zIndex: 1,
    //         position: iwPosition,
    //         content: inactiveInfoWindow,
    //         disableAutoPan: false,
    //         map: map //map에 해당 인포윈도우를 적용한다.
    //       });

    //중심좌표 재설정
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }*/

  }, []);

  return <StyledMapContainer id="map" {...props}><MapButton/></StyledMapContainer>;
};

// 넘겨받은 props를 아래와 같이 사용할 수 있습니다.
const StyledMapContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
`;

// 넘겨받을 props의 타입을 아래와 같이 지정할 수 있습니다.
MapContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  marginBottom: PropTypes.string,
};

// 넘겨받을 props의 기본값을 지정할 수 있습니다.
MapContainer.defaultProps = {
  width: "100vw",
  height: "100vh",
  marginTop: "80px",
};

export default MapContainer;

/*

const MapContainer = () => {
  const [markers, setMarkers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {

    // 검색어를 서버에 전달하고 검색 결과를 받아오는 함수
    const searchPlace = async (query) => {
      try {
        const response = await axios.get(`/store/search?query=${query}`);
        setSearchResult(response.data.data);
      } catch (error) {
        console.error('Error fetching search result:', error);
      }
    };

    // 지도에 검색 결과를 표시하는 함수
    const displayMarkers = () => {
      markers.forEach((marker) => marker.setMap(null));

      searchResult.forEach((store) => {
        const position = new window.kakao.maps.LatLng(store.latitude, store.longitude);
        const marker = new window.kakao.maps.Marker({ position });
        marker.setMap(map);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      });
    };

    // 검색어가 변경될 때 마다 검색 함수를 호출하여 결과를 업데이트
    const handleSearch = (event) => {
      const query = event.target.value;
      searchPlace(query);
    };

    // 검색 결과가 업데이트되면 지도에 표시된 마커들을 삭제하고 새로운 검색 결과로 업데이트
    displayMarkers();

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [searchResult]);

  return <div id="map" style={{ width: '100vw', height: '36vh', marginTop: '80px' }} />;
};

export default MapContainer;

*/