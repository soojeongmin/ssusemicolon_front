import PropTypes from "prop-types";
import { styled, useTheme } from "styled-components";
import Icon from "../../component/Icon";
import { RoundedButton } from "../../component/RoundedButton";
import { Spacing } from "../../component/Spacing";
import { Text } from "../../component/Text";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ResultContainer = ({type}) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const titles = {
        'REGISTER': `신규 장소 등록 신청이 완료되었습니다.`,
        'MODIFY': `기존 장소 변경사항 신청이 완료되었습니다.`,
        'DELETE': `매장 삭제 신청이 완료되었습니다.`
    }

    const comment = {
        'REGISTER': `서비스 반영까지 1일 정도 소요될 수 있으니 기다려 주세요.`,
        'MODIFY': `서비스 반영까지 1일 정도 소요될 수 있으니 기다려 주세요.`,
        'DELETE': `서비스 반영까지 1일 정도 소요될 수 있습니다.`
    }

    const colors = {
        'REGISTER': theme.colors.mainRed,
        'MODIFY': theme.colors.mainYellow,
        'DELETE': theme.colors.mainGray
    }

    const handleToMain = () => {
        navigate("/");
    }

    return (
        <Layout>
            <Container>
                <Spacing spacing={'40px'}/>
                <Icon.Marker style={{color: colors[type]}}/>
                <Spacing spacing={'32px'}/>
                <Text fontSize={'30px'}>{titles[type]}</Text>
                <Text fontSize={'30px'}>{comment[type]}</Text>
                <Spacing spacing={'32px'}/>
                <RoundedButton onClick={handleToMain}>
                    <Text color={theme.colors.mainWhite}>
                        메인으로
                    </Text>
                </RoundedButton>
            </Container>
        </Layout>
    )
}

// ('REGISTER' | 'MODIFY' | 'DELTE')
ResultContainer.propTypes = {
    type: PropTypes.string.isRequired,
  };