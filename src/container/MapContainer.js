import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import MapButton from "./MapButton.jsx";

const { kakao } = window;

/**
 * @todo 마커 이미지 바꾸기, 확대/축소 변경, GPS 잡기 등
 * @param {*} props
 * @returns
 */

const MapContainer = (props) => {
  const { center, markers: propsMarkers } = props;
  const [level, setLevel] = useState(3);
  const [currentPos, setCurrentPos] = useState(false);
  const [refreshPos, setRefreshPos] = useState(false);

  useEffect(() => {
    const meanCenter = propsMarkers.reduce(
      (acc, { latitude, longitude }) => {
        if (propsMarkers.length <= 0) {
          return acc;
        }

        acc.latitude += latitude / propsMarkers.length;
        acc.longitude += longitude / propsMarkers.length;
        return acc;
      },
      { latitude: 0, longitude: 0 },
    );

    const { latitude, longitude } =
      Object.keys(center).length > 0 ? center : meanCenter;

    const markers = [...propsMarkers, center];
    let container = document.getElementById("map"),
      options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: level,
      };

    let map = new kakao.maps.Map(container, options);
    map.setMaxLevel(6);

    if (navigator.geolocation || currentPos) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const moveLatLon = new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude,
        );
        map.setCenter(moveLatLon);
      });
    } else {
      const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
      map.setCenter(moveLatLon);
    }

    function displayMarker(latlngPosition, storeName, density) {
      var imageSrc = "https://ifh.cc/g/YB8asG.png";

      if(density>=75) imageSrc = "https://ifh.cc/g/YB8asG.png";
      else if(density<75 && density >= 50) imageSrc = "https://ifh.cc/g/51onOY.png";
      else if(density<50 && density >= 25) imageSrc = "https://ifh.cc/g/wtKDAg.png";
      else if(density<25 && density >= 0) imageSrc = "https://ifh.cc/g/a5KAGn.png";
      else imageSrc = "https://ifh.cc/g/rqCy80.png";
      
      const imageSize = new kakao.maps.Size(50, 70);
      const imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        ),
        markerPosition = latlngPosition;

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);

      var iwContent = '<div style="padding:5px">'+storeName+'</div>';
      var infowindow = new kakao.maps.InfoWindow({
        content : iwContent
      });

      kakao.maps.event.addListener(marker, 'mouseover', function() {
          infowindow.open(map, marker);
      });
      
      kakao.maps.event.addListener(marker, 'mouseout', function() {
          infowindow.close();
      });
    }

    for (const { latitude, longitude, storeName, density } of markers) {
      const position = new kakao.maps.LatLng(latitude, longitude);
      displayMarker(position, storeName, density);
    }

    return () => {};
  }, [center, propsMarkers, level, currentPos, refreshPos]);

  const zoomIn = () => {
    if (level > 1) setLevel(level - 1);
  };

  const zoomOut = () => {
    if (level < 6) setLevel(level + 1);
  };

  const refreshLocation = () => {
    setRefreshPos(true);
    // 지도에서 센터를 가져오는거랑
    // 위치에대한 리스트 뽑아오느것
    // 위치에 대한 리스트 뽑는것은 응용
    // 지도에서 센터 가져오는것은 mapcontainer에서 getCenter 이름의 함수를 props로 받거
  };

  const updateCurrentPos = () => {
    // setCurrentPos(true);

    // if (currentPos) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     const moveLatLon = new kakao.maps.LatLng(
    //       position.coords.latitude,
    //       position.coords.longitude,
    //     );
    //     map.setCenter(moveLatLon);
    //   });
    // } else {
    //   const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    //   map.setCenter(moveLatLon);
    // }
  };

  const getCenter = () => {
    props.getCenter(this.map.center);
  }

  return (
    <StyledMapContainer id="map" {...props}>
      <MapButton
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        refreshLocation={refreshLocation}
        setCurrentPos={updateCurrentPos}
      />
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
  markers: PropTypes.array,
  center: PropTypes.object,
};

MapContainer.defaultProps = {
  width: "100vw",
  height: "100vh",
  marginTop: "80px",
  center: {},
  markers: [],
};

export default MapContainer;
