# Recipe API

Uma simples API que permite a busca de receitas.

### Requisitos
* Docker
* docker-compose
* GNU Make (opcional)

### Documentação
A documentação da API estará disponível em localhost:3000/
Os detalhes de como gerar a documentação estão disponíveis nas seções abaixo.

### Endpoints
    GET /recipes?i=ingredient_1,ingredient_2
    A query string e seus paramêtros são obrigratórios;
    O formato dos valores para esse parametros são os ingredientes separados por vírgula.

### Instruções
Antes de iniciar o projeto preencha o arquivo .env com sua chave do [giphy](https://developers.giphy.com/docs/)

#### Utilizando o Make
Para iniciar o projeto execute o comando:

    $ make dev

Esse comando irá instalar as dependências do projeto, gerar a documentação e iniciar o projeto em localhost:3000.

Para executar os testes basta executar:

    $ make test

Você pode obter informações sobre estes e outros comando disponível executando:

    $ make help

#### Utilizando docker-compose

Para iniciar o projeto execute:

    $ docker-compose run --rm app yarn install # Instala as dependências
    $ docker-compose run --rm app yarn generate-docs # Gera a documentação
    $ docker-compose up app # Inicia a aplicação em localhost:3000

Ou todos os comando encadeados

    $ docker-compose run --rm app yarn install \
    && docker-compose run --rm app yarn generate-docs \
    && docker-compose up app

Esse comando irá instalar as dependências do projeto, gerar a documentação e iniciar o projeto em localhost:3000.

Para executar os testes basta executar:

    $ docker-compose run --rm app yarn install # Instala as dependências
    $ docker-compose run --rm app yarn test # Executa os testes do projeto

Ou utilize os comandos combinados

    $ docker-compose run --rm app yarn install \
    && docker-compose run --rm app yarn test
