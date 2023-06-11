import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  padding-top: 31px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
  & img {
    @media screen and (max-width: 1460px) {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: -99999px;
      left: -99999px;
    }
  }
`;
