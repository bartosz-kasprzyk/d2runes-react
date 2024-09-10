import styled from "styled-components";
import ButtonLeft from "../../images/ScrollButton/button_left.webp"
import ButtonRight from "../../images/ScrollButton/button_right.webp"
import ButtonMid from "../../images/ScrollButton/button_mid.webp"

export const StyledButton = styled.button`
    width: 220px;
    color: #BD9B4E;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: 
        url(${ButtonLeft}) left center no-repeat,
        url(${ButtonRight}) right center no-repeat,
        url(${ButtonMid}) center repeat-x;
    background-size: auto 100%, auto 100%, auto 100%;
    border: none;
    outline: none;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, filter 0.3s ease, transform 0.3s ease;

    ${({ $isVisible }) => $isVisible && `
        opacity: 1;
        visibility: visible;
    `}

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        transform: translateY(5px);
    }
`;