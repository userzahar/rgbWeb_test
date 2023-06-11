import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  height: 474px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 228px;
    margin-bottom: 20px;
  }
`;
