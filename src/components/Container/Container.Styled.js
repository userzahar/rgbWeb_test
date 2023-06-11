import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  width: 474px;
  height: 474px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
