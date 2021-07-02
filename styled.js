import styled from "styled-components";

export const Background = styled.div `
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    background-color: #171717;
    box-sizing: border-box;
    display: grid;
    place-content: center;
    
    font-size: 2rem;
`

export const Calculadora = styled.div `
     height: 80vh;
     width: 50vh;
     background-color: #444444;
     border-radius: 1rem;   
     padding: 1rem;
     box-shadow:3px 3px 6px #010101;
     
     
`

export const BoxBotao = styled.div `
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    
`

export const Monitor = styled.div `
    background-color: #171717;
    border-radius: 0.5rem;
    grid-column: 1 / -1;
    color: #EDEDED;
    text-align: right;
    padding: 1.4rem;
    font-size: 2rem;
    overflow: hidden;
`

export const BotaoNum = styled.button `
    background-color:#EDEDED;
    display: grid;
    place-content: center;
    border: 0;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    :hover {
        background-color: #171717;
        color:#EDEDED;
    }
`


export const BotaoLimpar = styled.button `
    background-color: #171717;
    display: grid;
    grid-column: 1 / span 2;
    color: #EDEDED;
    place-content: center;
    border: 0;
    font-size: 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    
    :hover { 
        background-color: #EDEDED;
        color: #171717;
    }
`

export const BotaoOperador = styled.button `
    background-color: #DA0037;
    display: grid;
    place-content: center;
    border: 0;
    color: #EDEDED;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    

    :hover {
        color: #171717;
    }
`

export const BotaoZero = styled.button `
    background-color:#EDEDED;
    display: grid;
    grid-column: 1 / span 2;
    place-content: center;
    border: 0;
    font-size: 1.5rem;
    border-radius: 25px;
    place-content: unset;
    align-items: center;
    padding-right: 6rem;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    :hover {
        background-color: #171717;
        color:#EDEDED;
    }
`