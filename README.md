# Pokemon-desafio
Uma aplicação que lista os pokemons mostrando suas habilidades e também possibilitando favoritá-los.

![WhatsApp Image 2022-03-02 at 02 58 18](https://user-images.githubusercontent.com/37816505/156304254-85c9f6bc-ebab-4289-b35d-152db6cc8ed3.jpeg)

![WhatsApp Image 2022-03-02 at 02 58 40](https://user-images.githubusercontent.com/37816505/156304242-48852e42-d271-4f36-9cd1-863bdaa6b7b2.jpeg)

<!-- 
1. Descrição do projeto
2. Tecnologias utilizadas
3. Organização do projeto
4. Build e deploy
5. Desenvolvimento 
-->


## 1. Descrição do projeto
## 1.1. Tecnologias

Principais tecnologias utilizadas neste projeto são apresentadas na tabela abaixo.

| Tecnologia                               | Descrição                                                                     |
| :--------------------------------------- | :---------------------------------------------------------------------------- |          
| [React Native](https://reactnative.dev/)    | Biblioteca JavaScript para criação de aplicações móveis.                       |


## 1.2. Organização do projeto

O está organizado como:

     ├── src
        ├── @types
        ├── assets
        ├── components
           ├── ButtonLogout
           ├── ButtonTheme
           ├── EmptyPage
           ├── Footer
           ├── Form
           ├── Logo
           ├── PokemonCard
           ├── TabNumberFavorites
        ├── global
        ├── hooks
        ├── routes
        ├── screens
           ├── AllPage
           ├── Details
           ├── Favorite
           ├── Login
           ├── Search
           ├── Splash
        ├── services
        ├── utils
        └── README.md

# SRC
| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| @types                    | Contém os elementos de tipagem da aplicação.                                                                                    |
| assets                    | Contém os elementos visuais da aplicação, como imagens, etc...                                                                  |
| components                | Contém componentes reutilizáveis ao decorrer da aplicação.                                                                      |
| global                    | Contém os elementos utilizados globalmente pela aplicação, como a definição de estilos.                                         |
| hooks                     | Contém os hooks da aplicação.                                                                                                   |
| routes                    | Contém as configurações de rotas da aplicação.                                                                                  |
| screens                   | Contém as páginas da aplicação.                                                                                                 |
| services                  | Contém a comunicação da aplicação com a Api.                                                                                    |

------------------------------------------------------------------------------------------------------------------------------------------------------------

| Arquivo                   | Descrição                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Forms                     | Contém os componentes de formulário da aplicação                                    |
| PokemonCard               | Contém o card utilizado para visualizar informações do pokémon.                     |
| AllPage                   | Contém a página utilizada para listar todos os pokémons.                            |
| Details                   | Contém o modal com mais informações sobre o pokémon.                                |
| Logo                      | Estilização do logo da aplicação.                                                   |
| Favorite                  | Página com os pokémons favoritos.                                                   |
| Search                    | Contém a página com busca do pokémon.                                               |
                                                                                            

## 1.3. Específicações sobre as funcionalidades
É possível listar, favoritar e desfavoritar pokémons. A seguir veja com mais detalhes cada uma delas.

|Operação     | Descrição
|------------ | -----------------------
| Favoritar   | É possível favoritar pokémons.
| Desfavoritar| É possível desfavoritar pokémons.
| Dark theme  | É possível alterar o tema da aplicação.
| Listas      | Listagem de usuários.
  
## 2.  Como executar

# Mobileapp

Clone o projeto e acesse a pasta **Mobile** onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
```

Por fim para executá-lo, rode:
```
expo start
```
