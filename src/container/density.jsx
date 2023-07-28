import React from 'react';
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

const Density = ({storeInfo}) => {
  // if (isLoading || isError || !searchResult) {
  //   return null; // 또는 로딩 화면 또는 오류 처리 등을 할 수 있음 다만 일괄적으로 detailboard에서 처리했으므로 일일히 컴포넌트 들이 할 이유 없음
  // }

  // 남은 여석 계산
  // const remainingSeats = storeInfo.capacity - storeInfo.currentOccupancy;
  const remainingSeats = Math.round(storeInfo.seatCount - storeInfo.seatCount*(storeInfo.density/100));
  return (
    <Container>
      <Info>
        <IconWrapper>
          <Icon.Pop width="25px" />
        </IconWrapper>
        전체 좌석 수: {storeInfo.seatCount}자리
      </Info>
      <Separator /> {/* 구분선 추가 */}
      <Info>
        <IconWrapper>
          <Icon.Density width="25px" />
        </IconWrapper>
         밀집도: {storeInfo.density}%
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