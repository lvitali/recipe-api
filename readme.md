# Recipe API

Uma simples API que permite a busca de receitas.

### Requisitos
* Docker
* docker-compose
* GNU Make (opcional)

### Endpoints
    GET /recipes?i=ingredient_1,ingredient_2
    A query string e seus paramêtros são obrigratórios;
    O formato dos valores para esse parametros são os ingredientes separados por virgúla.

    GET / Documentação

### Instruções
Antes de iniciar o projeto preencha o arquivo .env com sua chave do [giphy](https://developers.giphy.com/docs/)

Para iniciar o projeto execute o comando:

    $ make dev

Esse comando irá instalar as dependências do projeto, gerar a documentação iniciaro projeto
na porta 3000.

Para executar os testes basta executar:

    $ make test

Você pode obter informações sobre estes e outros comando disponível executando:

    $ make help

