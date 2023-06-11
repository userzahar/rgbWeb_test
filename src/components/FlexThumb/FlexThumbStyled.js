import { styled } from "styled-components";

export const FlexThumbStyled = styled.div`
  display: flex;
  align-items: center;
  & img {
    @media screen and (max-width: 768px) {
      width: 77.81px;
      height: 32.12px;
    }
  }
  & p {
    margin-left: 16.27px;
    font-size: 21.9494px;
    line-height: 26px;
    @media screen and (max-width: 768px) {
      margin-left: 11.63px;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
    }
  }
`;
