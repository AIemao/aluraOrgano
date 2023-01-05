# Alura - Curso - React: como os componentes funcionam e React: Desenvolvendo com JS

Esta solução é baseada no curdo Alura - Organo. 

## Índice

- [Visão geral](#visão geral)
   - [Captura de tela](#captura de tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído com)
   - [O que aprendi](#o-que-aprendi)
   - [Desenvolvimento contínuo](#desenvolvimento contínuo)
   - [Recursos úteis](#useful-resources)
- [Autor](#autor)




## Visão Geral

### Screenshot

<img src="/images/FRONT.PNG" alt style="max-width: 100%">


### Links

- Solution URL: [GitHub](https://github.com/AIemao/aluraOrgano)
- Live Site URL: [Vercel](https://alura-organo-delta.vercel.app/)

## Meu processo

### Construido em

- React
- CSS custom properties


### O que aprendi

Proud to write a good README.md!

````React componentização one way data binding e map em componentes
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

### Continued development

Site Alura:
https://www.alura.com.br/

### Useful resources

- [Vercel](https://vercel.com/) - Deploy
- [React Icons] https://react-icons.github.io/react-icons/


## Author

- Site - [Celio Junior](https://www.linkedin.com/in/celio-junior-152529193/)


