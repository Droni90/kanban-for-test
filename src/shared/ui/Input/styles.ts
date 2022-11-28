import styled from "styled-components";

interface InputComponentProps {
  color?: string;
  textColor?: string;
  rounded?: boolean;
  padding?: string;
}
export const InputComponent = styled.div<InputComponentProps>`
  position: relative;
  input {
    border: none;
    width: 187px;
    background: ${({ color }) => (color ? color : "#2D4071")};
    padding: ${({ padding }) => (padding ? padding : "9px 25px 9px 10px")};
    color: ${({ textColor }) => (textColor ? textColor : "#8C939F")};
    border-radius: ${({ rounded }) => (rounded ? "50px" : "4px")};
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 12px;
  margin: 0;
  padding: 0;
`;
