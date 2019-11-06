import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${props => props.theme.black};
  display: block;
  font-family: ${props => props.theme.sansSerif};
  line-height: 1.3;
  font-size: 1.6rem;
  font-weight: ${props => props.theme.weightBold};
  padding-top: 40px;
  margin-bottom: 3px;
`;

const StyledCardLabel = styled.h5`
  font-family: ${props => props.theme.sansSerif};
  line-height: 135%;
  font-size: 1.4rem;
  font-weight: ${props => props.theme.weightBold};
`;

const StyledCardTitle = styled.h2`
  font-family: ${props => props.theme.sansSerif};
  line-height: 140%;
  font-size: 3.2rem;
  font-weight: ${props => props.theme.weightBold};
`;

const StyledTertiaryHeading = styled.h3`
  font-family: ${props => props.theme.georgia};
  line-height: 165%;
  font-size: 1.4rem;
  font-weight: ${props => props.theme.weightRegular};
  letter-spacing: 0.09rem;
  text-transform: uppercase;
`;

const StyledCardMeta = styled.h4`
  font-family: ${props => props.theme.sansSerif};
  line-height: 165%;
  font-size: 2.4rem;
  font-weight: ${props => props.theme.weightRegular};
`;

const StyledBodyCopy = styled.p`
  font-family: ${props => props.theme.georgia};
  line-height: 160%;
  font-size: 1.8rem;
  font-weight: ${props => props.theme.weightRegular};
`;

export {
  StyledLabel,
  StyledCardLabel,
  StyledCardTitle,
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy
};
