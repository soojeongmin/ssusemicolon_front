import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDetailboardQuery } from "../utils/hooks/useDetailboard";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  margin: 20px;
  margin-left:50%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const type = styled.h3`
font-size: 12px;
`;
const Subtitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Market = () => {
  const {storeId} = useParams();
  const {isLoading, data: searchResult, isError} = useDetailboardQuery();
  const [storeInfo, setStoreInfo] = useState({});


  
  
  useEffect(() => {
    if(searchResult){// 서버에서 가게 정보를 받아오는 함수를 가정하고, 데이터를 storeInfo에 저장한다고 가정
    setStoreInfo(searchResult);}
  }, []);
  if (!searchResult) {
    return null; // 또는 로딩 화면 또는 오류 처리 등을 할 수 있음
  }
  const businessDays = searchResult?.businessDays || null;
  return (
    <Container>
      <Title>{storeInfo.storeName}</Title>
      {/* <type>{storeInfo.Category}</type> */}
      <Subtitle></Subtitle>
      <Info>{storeInfo.address}</Info>
      <Subtitle></Subtitle>
  <Info>{WorkDay(storeInfo.businessDays)} 운영</Info>
  <Subtitle></Subtitle>
  <Info>영업시간 {storeInfo.openBusinessHour}시~{storeInfo.closeBusinessHour}시</Info>
    </Container>
  );
};

function WorkDay(businessDays) {
  let Week = ['일', '월', '화' , '수' , '목' , '금', '토'];
  let work = '';
  if(!businessDays){ return null;}
  for(let i =0;i<businessDays.length;i++){
    
    if(businessDays[i] === 'OPEN' && i !== businessDays.length-1)
    {   work+=Week[i]+',';}
    else if(businessDays[i]==='CLOSED')
    {  continue;}
    else
      {work+=Week[i];}

    
  }
  return work;
}

export default Market;