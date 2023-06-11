import { styled } from "styled-components";

export const FormStyledContainer = styled.div`
  width: 366px;
  height: 474px;
  padding: 50px 58px;
  background-color: #303a53;
  border-radius: 8px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 41px 21px;
    width: 328px;
    height: 423px;
  }

  & h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 18px;
    }
  }
  & input {
    border: none;
    width: 248px;
    height: 51px;
    margin-bottom: 14px;
    background-color: #272d3d;
    border-radius: 8px;
    padding: 13px 22px;
    @media screen and (max-width: 768px) {
      width: 286px;
      height: 46px;
      padding: 12px 26.29px;
    }
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

    @media screen and (max-width: 768px) {
      width: 222.25px;
      height: 45.55px;
      margin-bottom: 18.45px;

      font-size: 14px;
      line-height: 22px;
    }
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
    @media screen and (max-width: 768px) {
      font-size: 11px;
    }
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
  }
`;
