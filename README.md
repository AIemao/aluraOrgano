# Alura - Curso - React: como os componentes funcionam e React: Desenvolvendo com JS

Esta solução é baseada no curso Alura - Organo. 

## Índice

- [Visão geral](#visão-geral)
   - [Captura de tela](#captura-de-tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
   - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
   - [Recursos úteis](#useful-resources)
- [Autor](#autor)




## Visão Geral

### Captura de tela

<img src="/public/imagens/FRONT.PNG" alt style="max-width: 100%">


### Links

- Solution URL: [GitHub](https://github.com/AIemao/aluraOrgano)
- Live Site URL: [Vercel](https://alura-organo-delta.vercel.app/)

## Meu processo

### Construido em

- React
- CSS custom properties


### O que aprendi

React componentização one way data binding e map em componentes

````JS
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
````

### Desenvolvimento contínuo

Site Alura:
https://www.alura.com.br/

### Recursos úteis

- [Vercel](https://vercel.com/) - Deploy
- [React Icons] https://react-icons.github.io/react-icons/


## Autor

- Site - [Celio Junior](https://www.linkedin.com/in/celio-junior-152529193/)


