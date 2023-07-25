import { styled } from "styled-components"
import MapContainer from "../container/MapContainer"
import Header from "../container/Header";
//import {} from "../component/Icon";
import Rechart from "../rechart";
import MyCalendar from "../container/Calendar";
import Picture,{Picture2} from "../container/Picture";
import Market from "../container/Market";
import Density from "../container/density";
import MyChart from"../container/Chart";
import ChartToggle from "../container/ToggleChart";


const Container = styled.div`
    // color: ${props => props.theme.colors.mainRed};
   
`

export const DetailPage = () => {
    return (
    <Container>
        <Header/>
        <MapContainer width={'100vw'} height={'45vh'} marginTop="80px"/>
        <Picture/>
        <Picture2/>
        <Market/>
        <Density/>
        <MyCalendar/>
        <ChartToggle/>
        
    </Container>)
}