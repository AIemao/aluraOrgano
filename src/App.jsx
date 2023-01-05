import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Higiene e Limpeza',
      cor: '#00a2ff'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mercearia',
      cor: '#00ff62'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hortifrúti',
      cor: '#09ff00'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Açougue',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Frutas e Legumes',
      cor: '#b36edb'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bebidas',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DETERGENTE',
      cargo: 'R$ 1,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPeCbEIg-eLKoMlVcAh9vPPlc1IMq0Fep6w&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SABÃO EM PÓ',
      cargo: 'R$ 1,00',
      imagem: 'https://cdn.n49shop.com.br/n49shopv2_papelecia/images/products/2195/5c3604c194a08-sabao-em-po-sache-500g-primavera-ype_.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SABONETE',
      cargo: 'R$ 1,00',
      imagem: '	https://abelharainha.com.br/wp-content/uploads/2020/12/5395-Sabonete-cremoso-em-barra-quarteto-sortido.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ESPONJA DE AÇO',
      cargo: 'R$ 1,00',
      imagem: 'https://a-static.mlcdn.com.br/800x560/esponja-de-aco-inox-clink/casaecozinhavariedades/6c038f40788d11ebace34201ac1850d6/8b9d522c6b0a7d4e25ab0d469b484f41.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ARROZ',
      cargo: 'R$ 1,00',
      imagem: 'https://static.paodeacucar.com/img/uploads/1/771/529771.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FEIJÃO',
      cargo: 'R$ 1,00',
      imagem: 'https://media.cotabest.com.br/media/sku/feijao-carioca-pacote-1kg-camil-pct.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MACARRÃO',
      cargo: 'R$ 1,00',
      imagem: 'https://trimais.vteximg.com.br/arquivos/ids/1008111-1000-1000/foto_original.jpg?v=637395834075300000',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEITE',
      cargo: 'R$ 1,00 UN',
      imagem: 'https://www.drogariaminasbrasil.com.br/media/product/9e2/leite-uht-integral-piracanjuba-1l-com-tampa-3cb.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CEBOLA',
      cargo: 'R$ 1,00',
      imagem: 'https://www.hortifrutiorganico.com.br/36-large_default/cebola-organica-500g.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALHO',
      cargo: 'R$ 1,00',
      imagem: 'https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/160134-1000-1000/alho-roxo.png?v=637285138034270000',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TOMATE',
      cargo: 'R$ 1,00',
      imagem: 'https://scfoods.fbitsstatic.net/img/p/tomate-debora-maduro-para-molho-500g-70892/257510.jpg?w=800&h=800&v=no-change&qs=ignore',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALFACE',
      cargo: 'R$ 1,00 UN',
      imagem: 'https://scfoods.fbitsstatic.net/img/p/alface-crespa-higienizada-500g-71095/257715.jpg?w=800&h=800&v=no-change&qs=ignore',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CARNE MOÍDA',
      cargo: 'R$ 1,00 KG',
      imagem: 'https://s.cornershopapp.com/product-images/2163602.jpg?versionId=3p3VlncFaGjlBs.R.wY_CJAbeq3UVped',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SALSICHA',
      cargo: 'R$ 1,00',
      imagem: 'https://static.paodeacucar.com/img/uploads/1/18/658018.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BACON',
      cargo: 'R$ 1,00',
      imagem: 'https://hiperideal.vteximg.com.br/arquivos/ids/201271-292-292/75795.jpg?v=637961676848530000',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FRANGO',
      cargo: 'R$ 1,00 KG',
      imagem: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15893/medium/frango-inteiro-resfriado-kg_11047.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MAÇA',
      cargo: 'R$ 1,00 KG',
      imagem: 'https://img.freepik.com/fotos-gratis/macas-frescas-frescas-maduras-suculentas-perfeitas-inteiras-na-mesa-branca_179666-271.jpg?auto=format&h=200',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BANANA',
      cargo: 'R$ 1,00 KG',
      imagem: 'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MELANCIA',
      cargo: 'R$ 1,00',
      imagem: 'https://agricolafamosa.com.br/wp-content/uploads/2017/04/melancia-com-semente-interna.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LIMÃO',
      cargo: 'R$ 1,00',
      imagem: 'http://www.restaurantefrutosdaterra.com.br/wp-content/uploads/2019/03/Beneficios-do-Limao-para-sua-Sa%C3%BAde-frutos-da-terrra.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SUCO',
      cargo: 'R$ 1,00',
      imagem: 'https://static.paodeacucar.com/img/uploads/1/324/666324.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'REFRIGERANTE',
      cargo: 'R$ 1,00',
      imagem: 'https://static.paodeacucar.com/img/uploads/1/643/20247643.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ÁGUA',
      cargo: 'R$ 1,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkX20-LrnV-3oQV67rbjy0L-ngUhLIEaW2HzzTLh-o5idA21iMoZRDyxakDYzS65_sp8&usqp=CAU',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CERVEJA',
      cargo: 'R$ 1,00',
      imagem: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-lata-350-ml1-157b2e5b56d0a3b51c15676907824683-640-0.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Lista de Compras</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
          />
          )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
