import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formutario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";


function App() {
  const times = [
    {
      nome:'Marvel',
      corPrimaria: '#ff0000',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'DC',
      corPrimaria: "#0e0e0e",
      corSecundaria: "#E8F8EE",
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App" style={{ backgroundColor: 'black'}}>
      <Banner />
      <Formulario
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

        {times.map(time => <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}
      <Rodape />
    </div>

  );
}

export default App;
