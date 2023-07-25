import { styled } from "styled-components"
import Icon from '../component/Icon'

const ButtonContainer = styled.div`
    position: relative;
`

const StyledIconCenter = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -15px 0 0 -15px;
  }
`

const StyledIconLeft = styled.div`
  svg {
    position: absolute;
    top: 55%;
    left: 28%;
    margin: -15px 0 0 -15px;
  }
`

const StyledIconRight = styled.div`
  svg {
    position: absolute;
    top: 55%;
    left: 75%;
    margin: -15px 0 0 -15px;
  }
`

const HorizontalLine = styled.div`
    border: 0.1px solid #2B2D42;
    width: 0px;
    height: 40px;

    position: absolute;
    top: 42%;
    left: 60%;
    margin: -15px 0 0 -15px;
`

const GPSButton = styled.div`
    position: fixed;
    z-index: 3;

    left: 1698px;
    top: 1192px;
    width: 55px;
	height: 55px;
	background-color: #FFFFFF;

	color: black;
	font-size: 16px;
	font-weight: bold;

    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.7);
`

const PillButton = styled.div`
    position: fixed;
    z-index: 3;

    left: 1768px;
    top: 1192px;
    width: 120px;
	height: 55px;
	background-color: #FFFFFF;

	color: black;
	font-size: 16px;
	font-weight: bold;

    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.7);
`

const MapButton = () => {
    const setCurrentGPS = () => {        
        /*

        var lat, lon;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude, lon = position.coords.longitude;
            })
        }
        else lat = 33.450701, lon = 126.570667;

        map.setCenter(new kakao.maps.LatLng(lat, lon));
        
        */
    };

    function zoomIn() {
        // map.setLevel(map.getLevel() - 1);
    }

    function zoomOut() {
        // map.setLevel(map.getLevel() + 1);
    }

    return <ButtonContainer>
        <GPSButton onClick={setCurrentGPS}>
            <StyledIconCenter><Icon.Gps width="30px" height="30px"/></StyledIconCenter>
        </GPSButton>
        <PillButton>
            <StyledIconLeft><Icon.Increase onClick={zoomIn} width="25px" height="25px"/></StyledIconLeft>
            <HorizontalLine/>
            <StyledIconRight><Icon.Decrease onClick={zoomOut} width="25px" height="25px"/></StyledIconRight>
        </PillButton>
    </ButtonContainer>
}

export default MapButton;
