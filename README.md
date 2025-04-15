

# TestReact-ASP.NET

Este é um projeto de exemplo que utiliza **ASP.NET** no backend e **React** no frontend. O objetivo é criar uma aplicação simples com arquitetura de microserviços, onde o backend é responsável pela gestão de produtos e o frontend exibe esses produtos em uma interface web.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. **Backend (ASP.NET)**:
   - Responsável por fornecer uma API RESTful para gerenciar produtos.
   - Utiliza o ASP.NET Core para criar a API e expô-la através do endpoint `/api/products`.
   
2. **Frontend (React)**:
   - A interface web que consome a API do backend e exibe a lista de produtos.
   - Utiliza o React para criar uma interface de usuário simples e interativa.

## Funcionalidade

- **API de Produtos (Backend)**:
  - A API expõe um endpoint `/api/products` que retorna uma lista de produtos em formato JSON.
  
- **Frontend (React)**:
  - O frontend consome a API para exibir os produtos na tela.
  - A interface exibe o nome e o preço de cada produto.

## Como Executar o Projeto

### Backend (ASP.NET)

1. Abra o projeto **ASPNETWithReact** no Visual Studio.
2. Execute o projeto para iniciar a API. A API estará disponível no endereço `https://localhost:7171/api/products`.
   
### Frontend (React)

1. Abra o diretório **product-ui** no terminal.
2. Instale as dependências com o comando:
   ```bash
   npm install
   ```
3. Inicie o servidor React com o comando:
   ```bash
   npm start
   ```
4. Acesse o frontend no navegador em `http://localhost:3000`.

## Observações

- O backend e o frontend estão configurados para se comunicarem via HTTP(S), com a API exposta pelo ASP.NET e consumida pelo React.
- A aplicação foi criada com o objetivo de ilustrar a integração entre **ASP.NET** e **React** em um projeto simples.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
