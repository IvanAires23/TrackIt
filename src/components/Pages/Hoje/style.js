import styled from "styled-components";

export const Container = styled.div`
    margin: 0 17px;
`

export const Topo = styled.div`
    margin-top: 98px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.color};
    }
`

export const BoxContainer = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    :last-child{
        margin-bottom: 120px;
    }
`
export const TituloHabito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`
export const Span = styled.span`
    color: ${props => props.color}
`

export const Check = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.background};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 50px;
        color: #FFFFFF;
    }
`
