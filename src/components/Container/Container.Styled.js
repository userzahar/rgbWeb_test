import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  width: 427px;
  height: 474px;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 228px;
    margin-bottom: 20px;
  }
`;
