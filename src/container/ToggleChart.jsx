import React, { useState } from 'react';
import MyChart from './Chart';
import Rechart from '../rechart';
import Icon from "../component/Icon"

const ChartToggle = () => {
  const [showMyChart, setShowMyChart] = useState(true); // 처음에는 MyChart를 보여줍니다.

  const toggleToMyChart = () => {
    setShowMyChart(true); // MyChart 보기
  };

  const toggleToRechart = () => {
    setShowMyChart(false); // Rechart 보기
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '80%' }}>
          <button onClick={toggleToMyChart}><Icon.Left/></button>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <button onClick={toggleToRechart}><Icon.Right/></button>
        </div>
      </div>
      <div style={{ width: '800px', height: '424px', margin: '0 auto' }}>
        {showMyChart ? <MyChart /> : <Rechart />}
      </div>
    </div>
  );
};

export default ChartToggle;