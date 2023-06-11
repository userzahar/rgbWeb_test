import { styled } from "styled-components";

export const FormStyledContainer = styled.div`
  width: 366px;
  height: 474px;
  padding: 50px 58px;
  background-color: #303a53;
  border-radius: 8px;
  z-index: 1;

  & h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 20px;
  }
  & input {
    border: none;
    width: 248px;
    height: 51px;
    margin-bottom: 14px;
    background-color: #272d3d;
    border-radius: 8px;
    padding: 13px 22px;
  }
  & button {
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: #fff;

    border: none;
    width: 248px;
    height: 51px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-color: #ff3459;
    background-color: #ff3459;
    cursor: pointer;
  }
  & button:hover {
    border-color: #ff002e;
    background-color: #ff002e;
  }
  & p {
    font-weight: 500;
    font-size: 12px;
    line-height: 149%;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
  }
`;
