import { styled } from "styled-components"
import PropTypes from "prop-types";

const StyledSpacing = styled.div`
    margin: ${props => props.spacing} 0;
    overflow: auto;
`

export const Spacing = (props) => {
    return <StyledSpacing {...props}/>
}

Spacing.propTypes = {
    spacing: PropTypes.string
};
  
Spacing.defaultProps = {
    spacing: '4px'
};