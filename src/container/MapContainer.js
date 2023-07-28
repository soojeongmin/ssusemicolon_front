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

  /**
   * 마커표시
   * @param {*} latlngPosition
   */
  const displayMarker = (latlngPosition, map) => {
    const imageSrc =
      "data:image/png;base64,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"; // pop level 별 fill color icon 분류

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
  };

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

    for (const { latitude, longitude } of markers) {
      const position = new kakao.maps.LatLng(latitude, longitude);
      displayMarker(position, map);
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
