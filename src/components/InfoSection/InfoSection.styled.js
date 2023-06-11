import { styled } from "styled-components";

export const InfoSectionThumb = styled.div`
  width: 119px;
  height: 32px;
  padding-left: 14px;
  background-color: #4252d1;
  display: flex;
  align-items: center;
  border-radius: 8px;

  & p {
    font-size: 16px;
    line-height: 24px;
    margin-left: 6px;
  }
`;

export const RedText = styled.h2`
  font-weight: 800;
  font-size: 77px;
  line-height: 94px;
  text-transform: uppercase;

  color: #ff3459;
  @media screen and (max-width: 768px) {
    font-weight: 800;
    font-size: 52.7273px;
    line-height: 65px;
  }
`;

export const GeneralText = styled.p`
  margin-top: 20.46px;
  font-weight: 400;
  font-size: 18px;
  line-height: 148%;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
    font-size: 14px;
  }

  & span {
    display: inline-block;
    background-color: #4252d1;
    border-radius: 8px;
    margin-left: 9px;
    width: 90px;
    text-align: center;
  }
`;
