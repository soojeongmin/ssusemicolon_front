import { styled, useTheme } from "styled-components"
import { Text } from "../../component/Text"
import Header from "../../container/Header"
import { Spacing } from "../../component/Spacing"



const StyledContainer = styled.div`
    border: 1px solid red;
    width: 100vw;
    min-height: 450px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    font-size: 20px;
`

const HStack = styled.div`
    display: flex;   
    align-items: center;
    justify-content: flex-end;
    
    border: 1px solid blue;
    width: 100%;
    gap: 2rem;

    padding-right: 5rem;
    flex: 1;
`

const StyledBorderInput = styled.input`
    flex: 1;

    border-radius: 6px;
    padding: 0 0.5rem;
    border: 1px solid ${props => props.theme.colors.mainGray};
    // width: ${props => props.width || "100%"}
`

const StyledTextWrapper = styled.div`
    flex: 1;
    border: 1px solid red;
    justify-content: flex-end;
    text-align: right;
`

const StyledButtonGroup = styled.div`
    flex: 1;
    gap: 0.2rem;
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
`

const RoundButton = styled.button`
    border-radius: 50%;

    ${({theme, isSelected}) => {

        return `
        border: 1px solid ${isSelected ? theme.colors.mainBlack : 'white'};
        background-color: ${isSelected ? theme.colors.mainBlack : 'none'};
        color: ${isSelected ? theme.colors.mainWhite : theme.colors.mainBlack};
        `
    }}
`

const RadioInput = styled.input`
    vertical-align: middle;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;

    &:checked {
        border: 0.4em solid tomato;
    }
`

export const RegisterPage = () => {

    const theme = useTheme();

    const simpleInputTitles = [
        '업체명', '도로명주소', '위도', '경도', '고객용 좌석 개수'
    ]

    const days = ['일', '월', '화', '수', '목', '금', '토'];

    return <>
    <Header/>
    <Spacing spacing={'40px'}/>
    <StyledContainer>
        <StyledForm>
            <Text fontSize={theme.fontSize.xl} fontWeight={'600'}>
                신규장소등록
            </Text>
            <Text color={theme.colors.mainGray} fontSize={theme.fontSize.md}>
                신규 장소를 등록하기 전 다음의 이용 방법을 확인하신 후 이용 바랍니다.
            </Text>
            {simpleInputTitles.map((title) => {
                return <HStack>
                    <StyledTextWrapper>
                        <Text>
                            {title}
                        </Text>
                    </StyledTextWrapper>
                    <StyledBorderInput/>
                </HStack>
            })}
            <HStack>
                <StyledTextWrapper>
                    <Text style={{flex: 1}}>
                        영업 시작 시간
                    </Text>
                </StyledTextWrapper>
                <StyledBorderInput width={'50%'}/>
                <Text>
                    종료
                </Text>
                <StyledBorderInput width={'50%'}/>
            </HStack>
            <HStack>
                <StyledTextWrapper>
                    <Text style={{flex: 1}}>
                        영업일
                    </Text>
                </StyledTextWrapper>
                <StyledButtonGroup>
                    {days.map(d => (
                        <RoundButton>
                            {d}
                        </RoundButton>
                    ))}
                </StyledButtonGroup>
            </HStack>
            <Spacing/>
            <Text fontSize={theme.fontSize.lg} fontWeight={'600'}>
                매장 내 CCTV 연동 동의 여부
            </Text>
            <Text color={theme.colors.mainGray} fontSize={theme.fontSize.md}>
                신규 장소를 등록하기 전 다음의 이용 방법을 확인하신 후 이용 바랍니다.
            </Text>
            <HStack>
                <HStack>
                    <RadioInput type="radio" name="agree"/>
                    <Text>
                        예
                    </Text>
                </HStack>
                <HStack>
                    <RadioInput type="radio" name="agree"/>
                    <Text>
                        아니오
                    </Text>
                </HStack>
            </HStack>
        </StyledForm>

    </StyledContainer>
    
    </>
}