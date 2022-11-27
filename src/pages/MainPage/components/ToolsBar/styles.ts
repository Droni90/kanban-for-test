import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    background: #F5F8FA;
    min-width: 154px;
    box-sizing: border-box;
`;

export const Title = styled.h2`
    font-size: 18px;
    line-height: 21px;
    color: #222;
    margin: 24px 0 26px 16px;
    padding: 0;
`;

interface ToolsBarItemProps {
    isActive: boolean
  }
export const ToolsBarItem = styled.div<ToolsBarItemProps>`
    display: flex;
    position:relative;
    height: 50px;
    width: 138px;
    background: ${({isActive}) => isActive ? '#fff' : 'inherit'};
    border-radius: 0px 8px 8px 0px;
    align-items: center;
    padding: 0 16px;
    fill: ${({isActive}) => isActive ? '#0094FF' : '#8C939F'};
    color: ${({isActive}) => isActive ? '#0094FF' : '#8C939F'};
    cursor: pointer;
    div {
        position: absolute;
        left: 0;
        height: 100%;
        width: 4px;
        border-radius: 0px 10px 10px 0px; 
        background: #0094FF;
    }
`;