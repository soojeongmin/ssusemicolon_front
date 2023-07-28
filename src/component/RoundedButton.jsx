import { styled } from "styled-components";

export const RoundedButton = styled.button`
    background-color: ${props => props.theme.colors.mainBlack};
    padding: 0.5rem;
    width: 200px;
    border-radius: 6px;
`