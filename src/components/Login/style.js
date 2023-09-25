import styled from "styled-components"
import { Oval } from "react-loader-spinner"

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;
    img{
        width: 180px;
        margin-bottom: 36px;
    }
`

export const InputsLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        outline: 0;
        padding-left: 20px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-weight: 400;
        font-size: 21px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`