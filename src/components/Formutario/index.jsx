import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
      evento.preventDefault()
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('')
      setCargo('')
      setImagem('')
      setTime('')
    }



  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Escolha um lado</h2>
        <CampoTexto 
          obrigatorio={true}
          label='Nome' 
          placeholder='Ex. Flash' 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          label='Poder' 
          placeholder='Ex. Velocidade'
          valor={cargo}
          aoAlterado={valor => setCargo(valor)} 
        />
        <CampoTexto 
          label='Avatar' 
          placeholder='https://www.link.com.br.png'
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true}
          label='Time'
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
        </form>
    </section>
  )
}

export default Formulario