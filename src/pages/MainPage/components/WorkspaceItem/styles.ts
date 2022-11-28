import styled from "styled-components";

export const Workspace = styled.div`
  height: 34px;
  margin-top: 19px;
  position: relative;
  div {
    position: absolute;
    left: -16px;
    right: -16px;
    background: #2d4071;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 16px;

    p {
      font-size: 14px;
      line-height: 16px;
      margin-left: 8px;
      color: #fff;
    }
  }
`;
