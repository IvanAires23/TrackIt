import styled from "styled-components";

export const Header = styled.div`
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`

export const Footer = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    h2{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    div{
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 45px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
`