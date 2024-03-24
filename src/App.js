import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placerholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placerholder="Digite seu Cargo"/>
      <CampoTexto label="imagem" placerholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
