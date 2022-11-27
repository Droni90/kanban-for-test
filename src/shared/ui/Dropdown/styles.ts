import styled from "styled-components";




export const DropdownComponent = styled.div`
    position: relative;
`

export const Items = styled.div`
    position: absolute;
    top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 6px;
    width: 132px;
    background: #fff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 18px 14px;
`
export const ListItem = styled("li")`
    margin: 0 0 24px 0;
    font-size: 14px;
    line-height: 16px;
    color: #000;
    cursor: pointer;

    &:last-child {
        margin: 0;
    };
    &:hover {
        opacity: 0.7;
    }

`;