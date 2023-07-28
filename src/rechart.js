import { useEffect } from "react";
import MyCalendar from "./container/Calendar";
import React, { PureComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailPage } from "./page/DetailBoard";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


const data = [
    {
        name: "월",
        uv: 4000,
        밀집도: 2400,
 
    },
    {
        name: "화",
       
       밀접도: 1398,
       
    },
    {
        name: "수",
      
        밀집도: 9800,
      
    },
    {
        name: "목",
      
        밀집도: 3908,
       
    },
    {
        name: "금",
   
        밀집도: 4800,
  
    },
    {
        name: "토",
   
        밀집도: 3800,
      
    },
    {
        name: "일",
        
        밀집도: 4300,
       
    },
];
const date = new Date();
<MyCalendar value = {date}/>
const logEvery3Seconds2 = () => {
    
    //   console.log(Chartdata);
    // 3000ms(3초) 간격으로 실행
  };
  
console.log();

export default class Example extends PureComponent {
    static demoUrl = "https://codesandboxt.io/s/simple-line-chart-kec3v";
    logEvery3Seconds2;
    render() {
        const {data} = this.props;
        return (
            
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="밀집도"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    {/* {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />} */}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

