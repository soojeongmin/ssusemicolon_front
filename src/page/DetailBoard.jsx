import React from 'react';
import { styled } from "styled-components";
import Header from "../container/Header";
import MapContainer from "../container/MapContainer";
import { useNavigate, useParams } from "react-router-dom";
import MyCalendar from "../container/Calendar";
import Market from "../container/Market";
import Picture, { Picture2 } from "../container/Picture";
import ChartToggle from "../container/ToggleChart";
import Density from "../container/density";
import { useDetailBoard } from '../utils/hooks/useDetailboard';


const Container = styled.div`
    // color: ${props => props.theme.colors.mainRed};
   
`

export const DetailPage = () => {
    console.log('this is detail page')
    const { storeId } = useParams();
    const navigate = useNavigate();
    console.log('storeId: ', storeId);
    const {isLoading, data, error} = useDetailBoard(storeId)

    // 전달받은 가게가 없다면 다시 리스트로 이동시키기!
    if(!storeId){
        navigate("/");
    }

    if(isLoading){
        return <>로딩중...</>
    }

    if(error){
        return <>{error}</>
    }

    console.log(data);

    const {thumUrl, density, longitude, latitude} = data;
    const center = {longitude, latitude};

    return (
    <Container>
        <Header/>
        <MapContainer center={center} width={'100vw'} height={'65vh'} marginTop="0px"/>
        <Picture thumurl={thumUrl}/>
        <Picture2 density={density}/>
        <Market data={data}/>
        <Density storeInfo={data}/>
        <MyCalendar/>
        <ChartToggle/>
        
    </Container>)
}