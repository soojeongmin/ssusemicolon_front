import React, {useState} from 'react';
import { styled } from "styled-components";
import Header from "../container/Header";
import MapContainer from "../container/MapContainer";
import { useNavigate, useParams } from "react-router-dom";
import MyCalendar from "../container/Calendar";
import Market from "../container/Market";
import Picture, { Picture2 } from "../container/Picture";
import ChartToggle from "../container/ToggleChart";
import Density from "../container/density";
import { useDetailBoard } from '../utils/hooks/useDetailboard';
import { useChart,useChart2 } from '../utils/hooks/useChart';



const Container = styled.div`
    // color: ${props => props.theme.colors.mainRed};
   
`
// export const Chartdata = () => {
//   const { storeId } = useParams();
//   const { isLoading, data, error } = useChart(storeId);

//   if (isLoading) {
//     return <>로딩중...</>;
//   }

//   if (error) {
//     return <>{error}</>;
//   }

//   console.log(data);

//   const density = data.density;

//   const data2 = [
//     {
//       name: "일",
//       pv: density[0],
//     },
//     {
//       name: "월",
//       pv: density[1],
//     },
//     {
//       name: "화",
//       pv: density[2],
//     },
//     {
//       name: "수",
//       pv: density[3],
//     },
//     {
//       name: "목",
//       pv: density[4],
//     },
//     {
//       name: "금",
//       pv: density[5],
//     },
//     {
//       name: "토",
//       pv: density[6],
//     },
//   ];

//   // data와 data2 배열을 합치기

//   // combinedData를 사용하여 작업 진행
//   // ...
//   console.log(data2);
//   return data2;
//     // 화면 렌더링

// };

export const DetailPage = () => {
    console.log('this is detail page')
    const { storeId } = useParams(); //여기서 아이디를 안전하게 만든다.
    const navigate = useNavigate();
    console.log('storeId: ', storeId);
    const [selectedDate, setSelectedDate] = useState(new Date("2023-07-25"));

  const handleDateChange = (date) => {
    setSelectedDate(date); }// 선택된 날짜를 상태로 관리합니다.
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    const formattedDate = formatDate(selectedDate); // 날짜를 YYYY-MM-DD 형식의 문자열로 변환합니다.
    console.log(formattedDate)
    const {isLoading, data, error} = useDetailBoard(storeId) // 쿼리를 담는다!
    const { isLoading:isLoading2, data:data2, error:error2 } = useChart(storeId);
    const { isLoading:isLoading3, data:data3,error:error3} = useChart2(storeId,formattedDate);
    if(!storeId){
        navigate("/");
    }
    if(isLoading2){
        return <>로딩중...22</>
    }

    if(error2){
        return <>{error2}</>
    }
     // 전달받은 가게가 없다면 다시 리ㅁ스트로 이동시키기!
   

    if(isLoading){
        return <>로딩중...</>
    }

    if(error){
        return <>{error}</>
    }
     if(isLoading3){
        return <>로딩중...33</>
    }

    // if(error3){
    //     return <>{error3}</>
    // }
    console.log(data3)
     const DayDensity = data2.densityPerDayList;
    const newdata = [
            {
              name: "일",
              밀집도: DayDensity[0],
            },
            {
              name: "월",
              밀집도: DayDensity[1],
            },
            {
              name: "화",
              밀집도: DayDensity[2],
            },
            {
              name: "수",
              밀집도: DayDensity[3],
            },
            {
              name: "목",
              밀집도: DayDensity[4],
            },
            {
              name: "금",
              밀집도: DayDensity[5],
            },
            {
              name: "토",
              밀집도: DayDensity[6],
            },
          ];
    
   
      // YYYY-MM-DD 형식으로 날짜를 변환하는 함수
 

   

   
    const {thumUrl, density, longitude, latitude} = data;
    const center = {longitude, latitude};

    return (
    <Container>
        <Header/>
        
        <MapContainer center={center} width={'100vw'} height={'65vh'} marginTop="0px"/>
        <Picture thumurl={thumUrl}/>
        <Picture2 density={density}/> {/*밀집도에 따라서 달라지는 값이 있어서*/}
        <Market data={data} />
        <Density storeInfo={data}/>
        <MyCalendar  onChange={handleDateChange}/>
        <ChartToggle data = {newdata}/>
        
    </Container>)
}
//