import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import MapButton from "./MapButton.jsx";

const { kakao } = window;

const MapContainer = (props) => {
  const [_map, setMap] = useState(null);
  const [viewStatus, setViewStatus] = useState(null);
  
  var markers = [];

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.586272, 127.029005),
        level: 2
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map); 
  }, []);

  const setCurrentGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var moveLatLon = new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude,
        );
        _map.setCenter(moveLatLon);
      });
    } else {
      var moveLatLon = new kakao.maps.LatLng(37.586272, 127.029005);
      _map.setCenter(moveLatLon);
    }
  }

  const zoomIn = () => {
    if(_map.getLevel()>1) _map.setLevel(_map.getLevel() - 1);
  }

  const zoomOut = () => {
    if(_map.getLevel()<14) _map.setLevel(_map.getLevel() + 1);
  }

  const setMarker = () => {
    // svg 사용불가, 이미지 파일만 인식해 추가 업로드 필요 (임시)

    // var imageSrc = "../asset/Marker.svg";
    // var imageSize = new kakao.maps.Size(50, 70);
    // var imageOption = { offset: new kakao.maps.Point(27, 69) };

    // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    var markerPosition  = new kakao.maps.LatLng(37.494705526855, 126.95994559383);

    var marker = new kakao.maps.Marker({
      position: markerPosition,
      // image: markerImage,
    });

    marker.setMap(_map);
    _map.panTo(markerPosition);
  }

  const addMarker = () => {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(_map);
    }
  }

  const removeMarker = () => {
    markers = markers.splice(0);
  }

  const getViewStatus = (value) => {
    if(value==0) setCurrentGPS();
    else if(value==1) zoomIn();
    else if(value==2) zoomOut();
  };

  return (
    <StyledMapContainer id="map" {...props}>
      <MapButton getViewStatus={getViewStatus}/>
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
`;

MapContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  marginBottom: PropTypes.string,
};

MapContainer.defaultProps = {
  width: "100vw",
  height: "100vh",
  marginTop: "80px",
};

export default MapContainer;

/*
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
*/
