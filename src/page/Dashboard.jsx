import { styled } from "styled-components"
import React, {useEffect} from "react";
import MapContainer from "../container/MapContainer";
import Header from "../container/Header";

const {kakao} = window;

const Container = styled.div`
    color: ${props => props.theme.colors.mainRed};
    position: relative;
`

const Box = styled.div`
    position: absolute;
    z-index: 2;

    left: 24px;
    top: 145px;
    width: 500px;
    height: 1115px;
    background-color: white;

    border-radius: 20px;

    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;
    
    box-shadow : 0px 0px 30px 0px rgb(0,0,0,0.25);
`;

export const DashboardPage = () => {

    return <Container>
        <Header/>
        <MapContainer/>
        <Box>
            내 근처에 위치한 가게
            <ul>
                <li>쑝쑝돈까스 숭실대점</li>
                <li>스톤 504</li>
                <li>하우스무드 숭실대점</li>
                <li>추억과김밥</li>
                <li>고렝</li>
            </ul>
        </Box>
    </Container>
}