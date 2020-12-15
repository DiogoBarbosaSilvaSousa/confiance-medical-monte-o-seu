import React, {useState} from 'react';
import Configuracao from './components/Configuracao';
import Escolha from './components/Escolha';
import Sugestao from './components/Sugestao';
import Monte from './components/Monte';
import Orcamento from './components/Orcamento';
import './css/App.css';
import * as Constante from './Constantes.js';

function App() {


  const imagem_inicial = Constante.BASE_URL_CONF_REACT + "/wp-content/plugins/confiance-medical-monte-o-seu/public/images/quadrado_transparente.png";

  const [dadosSugestao, setSugestao] = useState({acessorios:'',
                                               armario:'', 
                                               imagem_armario: imagem_inicial,
                                               gravador:'',
                                               imagem_gravador: imagem_inicial,
                                               camera:'',
                                               tipo_camera:'',
                                               imagem_camera: imagem_inicial,
                                               luz:'',
                                               imagem_luz: imagem_inicial,
                                               insuflador:'',
                                               imagem_insuflador: imagem_inicial,
                                               monitor:'',
                                               tipo_monitor:'',
                                               imagem_monitor: imagem_inicial,
                                               sistema: 'Sistema Sugerido'});

  const [dadosPersonalizado, setPersonalizado] = useState({acessorios:'',
                                               armario:'', 
                                               imagem_armario: imagem_inicial,
                                               gravador:'',
                                               imagem_gravador: imagem_inicial,
                                               camera:'',
                                               tipo_camera:'',
                                               imagem_camera: imagem_inicial,
                                               luz:'',
                                               imagem_luz: imagem_inicial,
                                               insuflador:'',
                                               imagem_insuflador: imagem_inicial,
                                               monitor:'',
                                               tipo_monitor:'',
                                               imagem_monitor: imagem_inicial,
                                               sistema: 'Sistema Personalizado'});

  function coletarDadosSugestao(dados) {
    setSugestao({...dadosSugestao, ...dados});
  }

  function coletarDadosPersonalizado(dados) {
    setPersonalizado({...dadosPersonalizado, ...dados});
  }
  
    return (
      <>
        <Configuracao aoEnviarSugestao={coletarDadosSugestao} aoEnviarPersonalizado={coletarDadosPersonalizado} />
        <Escolha />
        <Sugestao sistemaSugestao={dadosSugestao} aoEnviarSugestao={coletarDadosSugestao} />
        <Monte sistemaPersonalizado={dadosPersonalizado} aoEnviarPersonalizado={coletarDadosPersonalizado} />
        <Orcamento sistemaSugestao={dadosSugestao} sistemaPersonalizado={dadosPersonalizado} />
      </>
    );
}

export default App;