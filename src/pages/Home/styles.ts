import styled from "styled-components";

export const Container = styled.div`
    @-webkit-keyframes color-change-2x {
        0% {
            background: #19dcea;
        }
        100% {
            background: #b22cff;
        }
    }

    @keyframes color-change-2x {
        0% {
            background: #19dcea;
        }
        100% {
            background: #b22cff;
        }
    }

    -webkit-animation: color-change-2x 4s linear infinite alternate both;
    animation: color-change-2x 4s linear infinite alternate both;    

    display: flex;    
    justify-content: center;
    align-items: center;
    height: 100vh; 
    position: absolute;
    left: 0;   
    top: 0;
    right: 0;
    bottom: 0;
`;

export const Form = styled.div`
    max-width: 450px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-shadow: 0 0 10px #666;
    position: relative;
`;

export const Line = styled.hr`
    width: 100%;
    margin: 15px 0;
    color: #ddd;
`;

export const Input = styled.input`
    border-radius: 10px;
    width: 100%;    
    padding: 10px 5px;
    font-size: 20px;
    margin-bottom: 15px;
    border: 1px solid #666;    
    
    &:focus {
        outline: 1px solid #00BFFF;
        border: 1px solid #166fe5;
    }

    &[type="submit"] {        
        border: 0;
        background-color: #1877f2;
        color: #fff;
        font-size: 30px;    
        cursor: pointer;            
    }
`;

export const Link = styled.a`
    color: #1877f2;
`;

export const AddUser = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Cancel = styled.span`
    position: absolute;    
    right: 10px;
    top: 5px;
    color: #ff002c;
    font-size: 25px;
    cursor: pointer;
`;