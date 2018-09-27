dev:
	make install
	docker-compose up app 

install:
	docker-compose run --rm app yarn install

console:
	docker-compose run --rm app sh
