import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";
import Header from "../container/Header";
import MapContainer from "../container/MapContainer";
//import {} from "../component/Icon";
import { useNavigate, useParams } from "react-router-dom";
import MyCalendar from "../container/Calendar";
import Market from "../container/Market";
import Picture, { Picture2 } from "../container/Picture";
import ChartToggle from "../container/ToggleChart";
import Density from "../container/density";
import { fetchdetailboardApi } from "../utils/apis/detailboard";


const Container = styled.div`
    // color: ${props => props.theme.colors.mainRed};
   
`

export const DetailPage = () => {
    const {storeId} = useParams();
    const navigate = useNavigate();
    console.log('storeId: ', storeId);
    useEffect(() => {
        fetchdetailboardApi();
    },[])
    // 전달받은 가게가 없다면 다시 리스트로 이동시키기!
    if(!storeId){
        navigate("/");
    }

    return (
    <Container>
        <Header/>
        <MapContainer width={'100vw'} height={'65vh'} marginTop="0px"/>
        <Picture/>
        <Picture2/>
        <Market/>
        <Density/>
        <MyCalendar/>
        <ChartToggle/>
        
    </Container>)
}