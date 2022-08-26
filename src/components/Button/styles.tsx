import styled from "styled-components";

type ButtonType = {
    bgColor: string;
    color: string;
}
export const Button = styled.button<ButtonType>`
    font-size: 20px;
    background-color: ${props => props.bgColor};
    border: 0;
    padding: 10px 5px;
    color: ${props => props.color ? props.color : '#fff'};
    border-radius: 10px;
    cursor: pointer;
`;