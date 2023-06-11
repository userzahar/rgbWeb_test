import { styled } from "styled-components";

export const StyleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;
