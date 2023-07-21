import { styled } from "styled-components"
import MapContainer from "../container/MapContainer"
import Header from "../container/Header";
//import {} from "../component/Icon";
import Rechart from "../rechart";

const Container = styled.div`
    color: ${props => props.theme.colors.mainRed};
`

export const DetailPage = () => {
    return <Container><Header>
    </Header>
    <MapContainer></MapContainer>
        <div style ={{ width: 800,height: 424}}>
            <Rechart/>
        </div>
    </Container>
}