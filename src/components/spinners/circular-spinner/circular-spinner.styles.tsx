import styled from "styled-components";
import { COLORS } from "../../../utilities/designTokens";

export const SpinnerContainer = styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`

export const SpinnerCircle = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid ${COLORS.white};
    border-bottom-color: ${COLORS.red};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`