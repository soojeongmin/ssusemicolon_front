import { styled } from "styled-components"
import Icon from '../component/Icon'

const MapBtnContainer = styled.div`
    position: fixed;
    display: flex;

    left: 94%;
    top: 100px;
    width: 70px;
    height: 200px;

    z-index: 20;
`

const StyledIcon = styled.div`
    svg {
        display: flex;
        align-items: center;
    }
`;

const SingleButtonGroup = styled.button`
    width: 50px;
    height: 50px;
    padding: 5px 0 10px 0;
    
    background-color: #FFFFFF;

    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;

    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
`;

const DoubleButtonGroup = styled.button`
    width: 50px;
    height: 120px;
    padding: 15px 0 10px 0;
    
    background-color: #FFFFFF;

    border-radius: 100px;
    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;

    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
`;

const Space = styled.div`
    height: 10px;
`

const MapBtnInputButton = styled.button`
    width: 40px;
    height: 40px;
`;

const MapButton = (props) => {
    const sendViewStatus = (params) => {
        props.getViewStatus(params);
    };
    
    return <MapBtnContainer>
        <StyledIcon>
            <SingleButtonGroup>
                <MapBtnInputButton onClick={() => sendViewStatus(0)}><Icon.Gps width="25px" height="25px"/></MapBtnInputButton>
            </SingleButtonGroup>
            <Space/>
            <DoubleButtonGroup>
                <MapBtnInputButton onClick={() => sendViewStatus(1)}><Icon.Increase width="20px" height="20px"/></MapBtnInputButton>
                <MapBtnInputButton onClick={() => sendViewStatus(2)}><Icon.Decrease width="20px" height="20px"/></MapBtnInputButton>
            </DoubleButtonGroup>         
        </StyledIcon>
    </MapBtnContainer>
}

export default MapButton;
