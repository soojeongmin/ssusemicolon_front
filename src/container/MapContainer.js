import PropTypes from "prop-types";
import React, { useEffect } from "react";
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
        level: 1,
      };

    let map = new kakao.maps.Map(container, options);

    if (navigator.geolocation) {
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

    // function displayMultipleMarkers() {
    // }
    for (const { latitude, longitude } of markers) {
      console.log("dispay marker: ", latitude, " ", longitude);
      const position = new kakao.maps.LatLng(latitude, longitude);
      displayMarker(position);
    }

    return () => {
      // for (var i = 0; i < markers.length; i++) {
      //   markers[i].setMarkers(null);
      // }
    };
  }, [center, propsMarkers]);

  return (
    <StyledMapContainer id="map" {...props}>
      <MapButton />
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
