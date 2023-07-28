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

    function displayMarker(latlngPosition) {
      // red : https://ifh.cc/g/YB8asG.png
      // yellow : https://ifh.cc/g/51onOY.png
      // green : https://ifh.cc/g/wtKDAg.png
      // grey : https://ifh.cc/g/rqCy80.png
      
      const imageSrc = "https://ifh.cc/g/YB8asG.png";
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
    }

    for (const { latitude, longitude } of markers) {
      const position = new kakao.maps.LatLng(latitude, longitude);
      displayMarker(position);
    }

    return () => {};
  }, [center, propsMarkers, level, currentPos]);

  const zoomIn = () => {
    if (level > 1) setLevel(level - 1);
  };

  const zoomOut = () => {
    if (level < 14) setLevel(level + 1);
  };

  const updateCurrentPos = () => {
    setCurrentPos(true);
  };

  return (
    <StyledMapContainer id="map" {...props}>
      <MapButton
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        setCurrentPos={updateCurrentPos}
      />
    </StyledMapContainer>
  );
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
  markers: PropTypes.array,
  center: PropTypes.object,
};

// 넘겨받을 props의 기본값을 지정할 수 있습니다.
MapContainer.defaultProps = {
  width: "100vw",
  height: "100vh",
  marginTop: "80px",
  center: {},
  markers: [],
};

export default MapContainer;
