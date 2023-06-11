import { styled } from "styled-components";

export const DataStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  background-color: inherit;
  @media screen and (max-width: 768px) {
    width: 178px;
  }
`;

export const DataButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #302e5a;
  color: #fff;
  width: 141px;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 88px;
    height: 24px;
    font-weight: 600;
    font-size: 11px;
    line-height: 8px;
  }
`;

export const DataText = styled.p`
  margin: 0;
  margin-left: 6px;
`;
