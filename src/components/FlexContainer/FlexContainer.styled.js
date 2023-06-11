import { styled } from "styled-components";
export const FlexContainerStyled = styled.div`
  display: flex;
  padding: 90px 32px 27px 32px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    position: relative;
    height: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 32px 16px 16px 16px;
  }
`;
