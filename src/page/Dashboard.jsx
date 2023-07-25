import { styled } from "styled-components";
import Icon from '../component/Icon';
import Header from "../container/Header";
import MapContainer from "../container/MapContainer";
import { useAllStores } from "../utils/hooks/useDashboard";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/Hooks";
import { useSearchQuery } from "../utils/hooks/useSearch";

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

const StyledIcon = styled.div`
  svg {
    width: 23px;
    height: 23px;
  }
`

const Side = styled.div`
    margin: 0 auto;
    width: 440px;
    cursor: pointer;
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

const StyledImage = styled.div`
    width:440px; 
    height:220px;
    display: block; 
    background-color: #e0e0e0;
    background-image: url(${props => props.thumurl});
`

const Image = ({thumUrl}) => {
    return <StyledImage thumurl={thumUrl}/>
}

export const DashboardPage = () => {
    const {searchKeyword} = useAppSelector((store) => store.search);
    const {isLoading, data: allStores, isError} = useAllStores();
    const {isLoading: isSearchLoading, data: searchResult, isError: isSearchError} = useSearchQuery(searchKeyword);
    const navigate = useNavigate();

    if(isLoading){
        return '로딩중';
    }

    if(isSearchLoading){
        return '로딩중'
    }

    const stores = searchKeyword ? searchResult : allStores;

    const handleOnClickStore = (storeId) => {
        navigate(`/detail/${storeId}`);
    }

    const StoresComponent = () => {
        const ret =  stores.map(({storeId, storeName, thumUrl, address, seatCount}) => {
            return <Side key={storeId} onClick={() => handleOnClickStore(storeId)}>
            <Small>
                <Image thumUrl={thumUrl}/>
                <List>{storeName}</List>
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
        })

        const NoDataText = () => {
            return (<Side>
                <Small>
                    <span>
                    검색결과가 없어요.
                    </span>
                </Small>
            </Side>)
        }

        return ret.length > 0 ? ret : <NoDataText/>;
    }

    return <Container>
        <Header/>
        <MapContainer width={'1920px'} height={'1280px'} marginTop="0"/>
        
        <Box>
            <StyledIcon>
                <Side>
                    <TitleSpace>
                        <Title>
                            {searchKeyword ? `"${searchKeyword}" 검색결과`:"내 근처에 위치한 가게"}
                        </Title>
                    </TitleSpace>
                </Side>
               <StoresComponent/>
            </StyledIcon>
        </Box>

    </Container>
}