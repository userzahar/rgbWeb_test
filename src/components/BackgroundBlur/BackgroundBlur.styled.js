import { styled } from "styled-components";

export const BackgroundBlurStyled = styled.div`
  position: absolute;
  width: 399.01px;
  height: 400.31px;
  left: -31.33px;
  bottom: 489.69px;

  background: #332f65;
  opacity: 0.5;
  filter: blur(103.131px);
  transform: rotate(9.41deg);
  @media screen and (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
`;
