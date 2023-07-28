import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 50px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const DensityInfoContainer = ({ storeInfo }) => {
  const remainingSeats = Math.round(
    storeInfo.seatCount - storeInfo.seatCount * (storeInfo.density / 100),
  );
  return (
    <Container>
      <Info>
        <IconWrapper>
          <Icon.Pop width="25px" />
        </IconWrapper>
        전체 좌석 수: {storeInfo.seatCount}자리
      </Info>
      <Info>
        <IconWrapper>
          <Icon.Density width="25px" />
        </IconWrapper>
        밀집도: {storeInfo.density}%
      </Info>
      <Info>
        <IconWrapper>
          <Icon.Seat width="25px" />
        </IconWrapper>
        남은 여석: {remainingSeats}
      </Info>
    </Container>
  );
};

export default DensityInfoContainer;
