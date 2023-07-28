import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledText = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

export const Text = (props) => {
    return <StyledText {...props}/>
}


Text.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string
  };
  
Text.defaultProps = {
    fontSize: '16px',
    color: 'black',
    fontWeight: '400'
};