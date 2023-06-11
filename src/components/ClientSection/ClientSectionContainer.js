import { styled } from "styled-components";

export const ClientSectionStyled = styled.ul`
  margin-top: 52px;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    bottom: -209px;
    margin-top: 36px;
  }
`;

export const FlexClientThumbStyled = styled.li`
  display: flex;

  @media screen and (max-width: 768px) {
    width: 224px;
  }

  & h6 {
    font-weight: 700;
    font-size: 13px;
    line-height: 120%;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 148%;
    }
  }
  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    @media screen and (max-width: 768px) {
      line-height: 148%;
    }
  }
`;

export const ClientThumbStyled = styled.div`
  margin-left: 16.35px;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    margin-left: 11px;
    margin-bottom: 0;
  }
  & span {
    color: #4252d1;
  }
`;

export const BonusThumbStyled = styled.div`
  margin-left: 30.19px;
  @media screen and (max-width: 768px) {
    margin-left: 16.19px;
    margin-bottom: 22px;
  }
`;
