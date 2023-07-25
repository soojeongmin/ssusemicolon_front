import { styled } from "styled-components"
import Icon from '../component/Icon'
import MapContainer from "../container/MapContainer";
import Header from "../container/Header";

const Container = styled.div`
    position: relative;
`

const Box = styled.div`
    position: absolute;
    z-index: 2;
    overflow-y: scroll;

    left: 24px;
    top: 145px;
    width: 500px;
    height: 1115px;
    background-color: #FFFFFF;

    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #BBBBBB;
    
    box-shadow : 0px 0px 30px 0px rgb(0, 0, 0, 0.25);

    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 30px 0 0 0;
`

const List = styled.div`
    margin: 10px 0 3px 0;
    font-size: 23px;
    font-weight: bold;
`

const Image = styled.div`
    // background-image: url('https://ldb-phinf.pstatic.net/20200901_128/15989110964416vzBj_JPEG/S59Li0pfTPM_IbqdqrTp-sUw.jpg');
    width:440px; 
    height:220px;
    display: block; 
    background-color: #e0e0e0;
`

const StyledIcon = styled.div`
  svg {
    width: 23px;
    height: 23px;
  }
`

const Side = styled.div`
    margin: 0 auto;
    width: 440px;
`

const Small = styled.div`
    height: 290px;
    margin: 0 0 26px 0;
`

const TitleSpace = styled.div`
    height: 50px;
`

const Divide = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
`

const IconBox = styled.div`
    width: 150px;
    height: 100%;
`



export const DashboardPage = () => {
    return <Container>
        <Header/>
        <MapContainer width={'1920px'} height={'1280px'} marginTop="0"/>
        
        <Box>
            <StyledIcon>
                <Side>
                    <TitleSpace>
                        <Title>
                            내 근처에 위치한 가게
                        </Title>
                    </TitleSpace>
                </Side>
                <Side>
                    <Small>
                        <Image/>
                        <List>쑝쑝돈까스 숭실대점</List>
                        <Divide>
                            <IconBox>
                                <Icon.Pop/>매우 혼잡
                            </IconBox>
                            <IconBox>
                                <Icon.Density/>밀집도 90%
                            </IconBox>
                        </Divide>
                    </Small>
                </Side>
                <Side>
                    <Small>
                        <Image/>
                        <List>쑝쑝돈까스 숭실대점</List>
                        <Divide>
                            <IconBox>
                                <Icon.Pop/> 매우 혼잡
                            </IconBox>
                            <IconBox>
                                <Icon.Density/> 밀집도 90%
                            </IconBox>
                        </Divide>
                    </Small>
                </Side>
                <Side>
                    <Small>
                        <Image/>
                        <List>쑝쑝돈까스 숭실대점</List>
                        <Divide>
                            <IconBox>
                                <Icon.Pop/> 매우 혼잡
                            </IconBox>
                            <IconBox>
                                <Icon.Density/> 밀집도 90%
                            </IconBox>
                        </Divide>
                    </Small>
                </Side>
                <Side>
                    <Small>
                        <Image/>
                        <List>쑝쑝돈까스 숭실대점</List>
                        <Divide>
                            <IconBox>
                                <Icon.Pop/> 매우 혼잡
                            </IconBox>
                            <IconBox>
                                <Icon.Density/> 밀집도 90%
                            </IconBox>
                        </Divide>
                    </Small>
                </Side>
                <Side>
                    <Small>
                        <Image/>
                        <List>쑝쑝돈까스 숭실대점</List>
                        <Divide>
                            <IconBox>
                                <Icon.Pop/> 매우 혼잡
                            </IconBox>
                            <IconBox>
                                <Icon.Density/> 밀집도 90%
                            </IconBox>
                        </Divide>
                    </Small>
                </Side>
            </StyledIcon>
        </Box>

    </Container>
}