import styled from "styled-components";

export const Container = styled.div`
    margin: 0 4%;

`

export const MeusHabitos = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: 0;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        color: #FFFFFF;
        text-align: center;
    }
`

export const New = styled.div`
    background-color: #FFFFFF;
    display: ${props => props.display};
    flex-direction: column;
    padding: 18px 18px 15px 19px;
    margin-top: 20px;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
    }
    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
    }
`
export const Days = styled.div`
    display: flex;
    margin-top: 8px;
`
export const Day = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.background};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.color}

`

export const Finish = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    font-family: 'Lexend Deca';
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 23px;
        color: #52B6FF;
        border: 0;
        background-color: #FFFFFF;
    }
    button:last-child{ 
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        color: #FFFFFF;
        
    }
`

export const Habitos = styled.div`
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    position: relative;
    padding-left: 15px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    svg{
        position: absolute;
        right: 10px;
        top: 10px;
    }
        :last-child{
        margin-bottom: 80px;
    }
`


