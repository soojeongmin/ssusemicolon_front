import React from 'react';
import styled from 'styled-components';

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

const Market = ({data}) => {
  const {storeName, address, businessDays, openBusinessHour, closeBusinessHour} = data;

  return (
    <Container>
      <Title>{storeName}</Title>
      {/* <type>{Category}</type> */}
      <Subtitle></Subtitle>
      <Info>{address}</Info>
      <Subtitle></Subtitle>
      <Info>{WorkDay(businessDays)} 운영</Info>
      <Subtitle></Subtitle>
      <Info>영업시간 {openBusinessHour}시~{closeBusinessHour}시</Info>
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