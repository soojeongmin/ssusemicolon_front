import React from "react";
import { Line } from "@nivo/line";

export const Test = () => {
  const data = [
    {
      id: "Line A",
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 5 },
        { x: 5, y: 14 },
        { x: 6, y: 15 },
        { x: 7, y: 21 },
        { x: 8, y: 5 },
        { x: 9, y: 10 },
        { x: 10, y: 90 },
        { x: 11, y: 20 },
        // Add more data points for Line A here...
      ],
    },
    {
      id: "Line B",
      data: [
        { x: 0, y: 5 },
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 5 },
        { x: 5, y: 10 },
        { x: 6, y: 15 },
        { x: 7, y: 20 },
        { x: 8, y: 5 },
        { x: 9, y: 10 },
        { x: 10, y: 15 },
        { x: 11, y: 20 },
        // Add more data points for Line B here...
      ],
    },
  ];

  return (
    <div style={{ height: "400px", width: "400px", border: "1px solid red" }}>
      <Line
        data={data}
        // margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
        xScale={{ type: "linear" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        curve="linear"
        enablePoints={true}
        enableGridX={false}
        enableGridY={true}
        enableSlices="x"
        enableCrosshair={false}
        colors={["#ff0000", "#00ff00"]}
        lineWidth={2}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 10,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
          },
        ]}
      />
    </div>
  );
};

export default Test;
