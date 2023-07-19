import { styled } from "styled-components"

const Container = styled.div`
    color: ${props => props.theme.colors.mainRed};
`

export const DetailPage = () => {
    return <Container>
        This is detail
    </Container>
}