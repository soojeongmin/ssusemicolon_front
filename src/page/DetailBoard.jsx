import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { MyCalendar } from "../container/Calendar";
import Header from "../container/Header";
import MapContainer from "../container/MapContainer";
import Market from "../container/Market";
import StoreThumbContainer, {
  DensityStatusImageContainer,
} from "../container/Picture";
import ChartToggle from "../container/ToggleChart";
import DensityInfoContainer from "../container/density";
import { useDetailBoard } from "../utils/hooks/useDetailboard";

const Container = styled.div``;

export const DetailPage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const {
    isLoading: isStoreLoading,
    data: storeDetail,
    error,
  } = useDetailBoard(storeId);

  if (!storeId) {
    navigate("/");
  }

  if (isStoreLoading) {
    return <>로딩중...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const { thumUrl, density, longitude, latitude } = storeDetail;
  const center = { longitude, latitude };

  return (
    <Container>
      <Header />
      <MapContainer
        center={center}
        width={"100vw"}
        height={"65vh"}
        marginTop="0px"
      />
      <StoreThumbContainer thumurl={thumUrl} />
      <DensityStatusImageContainer density={density} />

      <Market data={storeDetail} />
      <DensityInfoContainer storeInfo={storeDetail} />
      <ChartToggle storeId={storeId} />
    </Container>
  );
};
