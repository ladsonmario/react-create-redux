import styled from "styled-components";

type ButtonType = {
    bgColor: string;
    color: string;
    disabled: boolean;
}
export const Button = styled.button<ButtonType>`
    font-size: 20px;
    background-color: ${props => props.bgColor};
    border: 0;
    padding: 10px 5px;
    color: ${props => props.color ? props.color : '#fff'};
    border-radius: 10px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? '.5' : '1'};
    transition: all ease .3s;

    &:hover {
        box-shadow: 0 0 5px #333;
    }
`;