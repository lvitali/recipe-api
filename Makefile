.PHONY: dev install console test docs teardown help

dev:
	make install
	make docs
	docker-compose up app

install:
	docker-compose run --rm app yarn install

console:
	docker-compose run --rm app sh

test:
	make install
	docker-compose run --rm app yarn test

docs:
	docker-compose run --rm app yarn generate-docs

teardown:
	docker-compose rm -sf app

help:
	@echo make dev 	    - Inicia o serviço utilizando docker na porta 3000
	@echo make install  - Instala as dependências do projeto
	@echo make console  - Inicia um novo container disponiblizando um console, util caso não possuir node ou yarn instalado
	@echo make docs     - Gera/Atualiza a documentação da API
	@echo make teardown - Para e remove todos os containers da aplicação
	@echo make test     - Roda a suite de testes do projeto
