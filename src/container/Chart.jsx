import { ResponsiveLine } from '@nivo/line';

const MyChart = () => {
  // 차트 데이터
  const data = [
    {
      id: '밀집률',
      data: [
            {
              x: '0시',
              y: 0.5
            },
            {
              x: '1시',
              y: 0.6
            },
            {
              x: '2시',
              y: 0.8
            },
            {
              x: '3시',
              y: 0.7
            },
            {
              x: '4시',
              y: 0.8
            },
            {
              x: '5시',
              y: 0.5
            },
            {
              x: '6시',
              y: 0.2
            },
            {
              x: '7시',
              y: 0.3
            },
            {
              x: '8시',
              y: 0.4
            },
            {
              x: '9시',
              y: 0.5
            },
            {
              x: '10시',
              y: 0.5
            },
            {
              x: '11시',
              y: 0.1
            },
            {
              x: '12시',
              y: -0.2
            },
            {
              x: '13시',
              y: -0.6
            },
            {
              x: '14시',
              y: -0.1
            },
            {
              x: '15시',
              y: 0
            },
            {
              x: '16시',
              y: 0.1
            },
            {
              x: '17시',
              y: -0.1
            },
            {
              x: '18시',
              y: -0.4
            },
            {
              x: '19시',
              y: -0.6
            },
            {
              x: '20시',
              y: -0.5
            },
            {
              x: '21시',
              y: 0.2
            },
            {
              x: '22시',
              y: 0.5
            },
            {
              x: '23시',
              y: 0.6
            },
            
        ]
    },
   
  ];

  return (
    <ResponsiveLine
    
      data={data}
      enableSlices="x"
      height={400}
      margin={{
        bottom: 60,
        left: 80,
        right: 20,
        top: 20,
      }}
    //   markers={[
    //     {
    //       axis: 'y',
    //       legend: 'y marker at 0',
    //       legendPosition: 'bottom-left',
    //       lineStyle: {
    //         stroke: '#b0413e',
    //         strokeWidth: 1,
    //       },
    //       value: 0,
    //     },
    //   ]}
      pointBorderColor="#fff"
      pointBorderWidth={2}
      pointSize={8}
      width={900}
      yScale={{
        max: 1,
        min: -1,
        type: 'linear',
      }}
    />
  );
};

export default MyChart;