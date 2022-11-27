import styled from "styled-components";


interface ButtonComponentProps {
    rounded?: boolean;
    color?: string;
    textColor?: string;
    iconLeft?: boolean
}
export const ButtonComponent = styled.button<ButtonComponentProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({textColor}) => textColor ? textColor : '#fff'};
    padding: 12px 20px;
    background: ${({color}) => color ? color : '#0094FF'};
    border: none;
    border-radius: ${({rounded}) => rounded ? "50px" : 'none'};
    fill: ${({textColor}) => textColor ? textColor : '#fff'};
    font-size: 14px;
    line-height: 16px;
    &:hover {
        opacity: 0.8;
        fill-opacity: 0.8;
        stroke-opacity: 0.8;
      }

      span {
        margin: ${({iconLeft}) => iconLeft ? '0 0 0 7px' : '0 7px 0 0'};
      }
    }

`