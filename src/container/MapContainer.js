// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MapContainer = () => {
//   const [markers, setMarkers] = useState([]);
//   const [searchResult, setSearchResult] = useState([]);

//   useEffect(() => {
//     let container = document.getElementById('map');
//     let options = {
//       center: new window.kakao.maps.LatLng(37.586272, 127.029005),
//       level: 1,
//     };
//     let map = new window.kakao.maps.Map(container, options);

//     // 검색어를 서버에 전달하고 검색 결과를 받아오는 함수
//     const searchPlace = async (query) => {
//       try {
//         const response = await axios.get(`/store/search?query=${query}`);
//         setSearchResult(response.data.data);
//       } catch (error) {
//         console.error('Error fetching search result:', error);
//       }
//     };

//     // 지도에 검색 결과를 표시하는 함수
//     const displayMarkers = () => {
//       markers.forEach((marker) => marker.setMap(null));

//       searchResult.forEach((store) => {
//         const position = new window.kakao.maps.LatLng(store.latitude, store.longitude);
//         const marker = new window.kakao.maps.Marker({ position });
//         marker.setMap(map);
//         setMarkers((prevMarkers) => [...prevMarkers, marker]);
//       });
//     };

//     // 검색어가 변경될 때 마다 검색 함수를 호출하여 결과를 업데이트
//     const handleSearch = (event) => {
//       const query = event.target.value;
//       searchPlace(query);
//     };

//     // 검색 결과가 업데이트되면 지도에 표시된 마커들을 삭제하고 새로운 검색 결과로 업데이트
//     displayMarkers();

//     return () => {
//       markers.forEach((marker) => marker.setMap(null));
//     };
//   }, [searchResult]);

//   return <div id="map" style={{ width: '100vw', height: '36vh', marginTop: '80px' }} />;
// };

// export default MapContainer;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
//import dummyData from './Dummydata'; // dummyData.ts에서 export한 배열을 가져옵니다.

const MapContainer = (props) => {
  useEffect(() => {
    var markers = [];
    var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.586272, 127.029005), //지도의 중심좌표
      level: 1, //지도의 레벨(확대, 축소 정도)
    };
    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    //---> 기본 맵 container, options, map 설정.
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
    }
  }, []);

  // props로 넘겨받은 걸 그대로 넘겨주기
  return <StyledMapContainer id="map" {...props} />;
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
