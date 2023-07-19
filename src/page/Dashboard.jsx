import { styled } from "styled-components"

const Container = styled.div`
    color: ${props => props.theme.colors.mainRed};
`

export const DashboardPage = () => {
    return <Container>
        This is dashboard
    </Container>
}