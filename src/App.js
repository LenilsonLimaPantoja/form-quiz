import { useState } from 'react';
import './App.scss';
import genio1 from './img/mobile.png'
import genio2 from './img/defi.png'
import genio3 from './img/inspiration_legere.png'
import genio4 from './img/inspiration_forte.png'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
function App() {
  const [dados, setDados] = useState({ "pergunta_1": "", "pergunta_2": "", "pergunta_3": "" })

  function handleDados(opcao, pergunta) {
    setDados({ ...dados, [pergunta]: opcao })
  }
  return (
    <div className="container">
      <div className='area-container'>
        <div className='card-left'>
          {!dados.pergunta_1 && <img src={genio1} />}
          {!dados.pergunta_2 && dados.pergunta_1 && <img src={genio2} />}
          {!dados.pergunta_3 && dados.pergunta_2 && <img src={genio3} />}
          {dados.pergunta_3 && <img src={genio4} />}
        </div>
        <div className='card-right'>
          <ul style={{ display: dados.pergunta_1 ? 'none' : 'flex' }}>
            <p>
              <span className='span-1'>1</span>
              <span>Você é da cidade de SANTA LUZA?</span>
            </p>
            <li onClick={() => handleDados('Sim', 'pergunta_1')}><span>Sim</span> <MdKeyboardDoubleArrowRight /></li>
            <li onClick={() => handleDados('Não', 'pergunta_1')}><span>Não</span><MdKeyboardDoubleArrowRight /></li>
          </ul>
          <ul style={{ display: dados.pergunta_2 || !dados.pergunta_1 ? 'none' : 'flex' }}>
            <p>
              <span className='span-1'>2</span>
              <span>Você conta o cabelo de quanto em quanto tempo?</span>
            </p>
            <li onClick={() => handleDados('Toda semana', 'pergunta_2')}><span>Toda semana</span> <MdKeyboardDoubleArrowRight /></li>
            <li onClick={() => handleDados('15 em 15 dias', 'pergunta_2')}><span>15 em 15 dias</span><MdKeyboardDoubleArrowRight /></li>
            <li onClick={() => handleDados('1x ao mês', 'pergunta_2')}><span>1x ao mês</span><MdKeyboardDoubleArrowRight /></li>
          </ul>
          <ul style={{ display: dados.pergunta_3 || !dados.pergunta_2 ? 'none' : 'flex' }}>
            <p>
              <span className='span-1'>3</span>
              <span>Você conhece o clube da NB?</span>
            </p>
            <li onClick={() => handleDados('Já sim', 'pergunta_3')}><span>Já sim</span> <MdKeyboardDoubleArrowRight /></li>
            <li onClick={() => handleDados('Quero conhecer', 'pergunta_3')}><span>Quero conhecer</span><MdKeyboardDoubleArrowRight /></li>
          </ul>
          <ul style={{ display: !dados.pergunta_1 || !dados.pergunta_2 || !dados.pergunta_3 ? 'none' : 'flex' }}>
            <p>
              <span style={{ width: '100%', left: 0 }}>Finalizado! Obrigado por participar!</span>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
