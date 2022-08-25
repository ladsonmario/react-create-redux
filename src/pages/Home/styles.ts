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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;    
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
    margin: 15px;
    color: #ddd;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;        
    font-weight: 600;
    font-size: 25px; 
`;

export const IconContainer = styled.div`
    background-color: #166fe5;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;    
    border-radius: 50%;
    margin-right: 5px;
`;

export const LogoIcon = styled.div`
    color: #fff;    
`;

export const LogoText = styled.div`
    color: #166fe5;    
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

export const Button = styled.button`
    font-size: 20px;
    background-color: #36a420;
    border: 0;
    padding: 10px 5px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`;

export const AddUser = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;    
    background-color: rgba(255,255,255, 0.6);
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