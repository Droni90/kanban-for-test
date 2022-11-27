import styled from "styled-components";

export const NotificationComponent = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin: 0 23px;

`

export const NotificationInfo = styled.div`
    position: absolute;
    top: -5px;
    right: -8px;
    width: 24px;
    height: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F21247;
    border-radius: 4px;
    font-size: 10px;
    line-height: 10px;
`