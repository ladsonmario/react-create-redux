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
`;

export const Opacity = styled.div`
    background-color: rgba(255,255,255, 0.6);
    width: inherit;
    height: inherit;
`;