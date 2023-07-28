import React, { useState } from 'react';
import MyChart from './Chart';
import Rechart from '../rechart';
import Icon from "../component/Icon"
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 424px;
  margin: 0 auto;
`;

const SwitchButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -20%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
`;

const SwitchButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
`;
const TitleWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom: 16px;`;

const GraphTitle = styled.h2`
  font-size:20px;
  font-weight:bold;`

const ChartToggle = ({data,newdata}) => {
  const [showMyChart, setShowMyChart] = useState(true); // 처음에는 MyChart를 보여줍니다.

  const toggleToMyChart = () => {
    setShowMyChart(true); // MyChart 보기
  };

  const toggleToRechart = () => {
    setShowMyChart(false); // Rechart 보기
  };

  return (
    <div>
      <SwitchWrapper>
      
        {showMyChart ? <MyChart newdata = {newdata} /> : <Rechart data = {data}/>}
        
        <SwitchButtonLeft onClick={toggleToMyChart}><Icon.Left /></SwitchButtonLeft>
        <SwitchButtonRight onClick={toggleToRechart}><Icon.Right /></SwitchButtonRight>
      </SwitchWrapper>
    </div>
  );
};

export default ChartToggle;