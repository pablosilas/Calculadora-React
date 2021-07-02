import React, { useState } from 'react';
import { Background, Calculadora, Monitor, BoxBotao, BotaoLimpar, BotaoOperador, BotaoNum, BotaoZero } from './styled.js';

function App() {

  const [resultado, setResultado] = useState("");

  const pegarNumero = (e) => {
    setResultado(resultado.concat(e.target.name));
  }

  const limpar = () => {
    setResultado("")
  }

  const deletar = () => {
    setResultado(resultado.slice(0, -1));
  }

  const calcular = () => {
    try{
      setResultado(eval(resultado).toString())
    } catch(err){
      setResultado('Erro!')
    }
    
  }

  return (
    <Background>
      <Calculadora>
        <BoxBotao>
          <Monitor> {resultado} </Monitor>
          <BotaoLimpar onClick={limpar}>AC</BotaoLimpar>
          <BotaoOperador onClick={deletar}>DEL</BotaoOperador>
          <BotaoOperador name='/' onClick={pegarNumero}>&divide;</BotaoOperador>
          <BotaoNum name='7' onClick={pegarNumero}>7</BotaoNum>
          <BotaoNum name='8' onClick={pegarNumero}>8</BotaoNum>
          <BotaoNum name='9' onClick={pegarNumero}>9</BotaoNum>
          <BotaoOperador name='*' onClick={pegarNumero}>&times;</BotaoOperador>
          <BotaoNum name='4' onClick={pegarNumero}>4</BotaoNum>
          <BotaoNum name='5' onClick={pegarNumero}>5</BotaoNum>
          <BotaoNum name='6' onClick={pegarNumero}>6</BotaoNum>
          <BotaoOperador name='+' onClick={pegarNumero}>+</BotaoOperador>
          <BotaoNum name='1' onClick={pegarNumero}>1</BotaoNum>
          <BotaoNum name='2' onClick={pegarNumero}>2</BotaoNum>
          <BotaoNum name='3' onClick={pegarNumero}>3</BotaoNum>
          <BotaoOperador name='-' onClick={pegarNumero}>&ndash;</BotaoOperador>
          <BotaoZero name='0' onClick={pegarNumero}>0</BotaoZero>
          <BotaoNum name='.' onClick={pegarNumero}>.</BotaoNum>
          <BotaoNum onClick={calcular}>=</BotaoNum>
        </BoxBotao>
      </Calculadora>
    </Background>
  );
}

export default App;
