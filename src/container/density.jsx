import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from "../component/Icon";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 50px;
  position: relative;
  margin-bottom: 15px; /* 아이콘과 텍스트 사이에 간격을 조정 */
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const Separator = styled.div`
  position: absolute;
  bottom: 475px;
  left: 15%;
  width: 70%;
  height: 1px;
  background-color: #ccc; /* 구분선의 색상을 지정합니다. */
`;

const Density = () => {
  const [storeInfo, setStoreInfo] = useState({
    capacity: 0, // 매장 수용 가능 인원 수
    currentOccupancy: 0, // 현재 매장 내 인원 수
  });

  useEffect(() => {
    // 서버에서 매장 내 인원 수와 밀집도 데이터를 받아와서 storeInfo에 저장한다고 가정
    const dataFromServer = {
      capacity: 100, // 매장 수용 가능 인원 수
      currentOccupancy: 50, // 현재 매장 내 인원 수
    };
    setStoreInfo(dataFromServer);
  }, []);

  // 남은 여석 계산
  const remainingSeats = storeInfo.capacity - storeInfo.currentOccupancy;

  return (
    <Container>
      <Info>
        <IconWrapper>
          <Icon.Pop width="25px" />
        </IconWrapper>
        매장 내 인원: {storeInfo.currentOccupancy}
      </Info>
      <Separator /> {/* 구분선 추가 */}
      <Info>
        <IconWrapper>
          <Icon.Density width="25px" />
        </IconWrapper>
        밀집도: {((storeInfo.currentOccupancy / storeInfo.capacity) * 100).toFixed(2)}%
      </Info>
      <Separator /> {/* 구분선 추가 */}
      <Info>
        <IconWrapper>
          <Icon.Seat width="25px" />
        </IconWrapper>
        남은 여석: {remainingSeats}
      </Info>
      <Separator /> {/* 구분선 추가 */}
    </Container>
  );
};

export default Density;