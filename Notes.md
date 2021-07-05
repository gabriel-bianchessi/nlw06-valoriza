## Aula-01

*yarn init -y -> Inicia o projeto
yarn add typescript -D -> Instala o typescript como dependência de desenvolvimento
yarn tsc --init -> Inicia o projeto typescript

Trocar a configuração strict no tsconfig para false

yarn add express -> Ajuda a configurar e criar um servidor mais facilente
yarn add @types/express -D -> Adiciona a tipagem do express

yarn add ts-node-dev -D -> Adiciona um pacote para rodar ts como dependência de desenvolvimento

## Aula 02

Tipos de parâmetros:
* Route params -> Parâmetro inserido dentro da própria rota http://app.com/products/237052361
* Query params -> Vem por query, não obrigatórios e não sãoexplicitos na rota 
(geralmente usado em filtro) http://app.com/products?name=teclado&tipo=mecanico
* Body params -> Vem no corpo da requisição {
  "name": "teclado",
  "tipo": "mecanico",
}

Usar o TypeORM para o projeto https://typeorm.io/#/

yarn add typeorm reflect-metadata -> Instalar o typeorm e sua dependência

migrations: controle de versionamento de tabelas na aplicação

cli: ferramenta que pode ser usado no terminal 

Para criar uma entidade tenho que digitar:
yarn typeorm migration:cretate -n nomeMigration

uuid -> Id único universal

generationStrategy: "increment" -> O banco de dados gera o id

Na migration temos o método up e down para fazer e desfazer a migration

yarn typeorm migration:run -> Roda as migrations
yarn typeorm entity:create -n User -> Cria entidade

Mudar configurações de acordo com a doc do typeorm

yarn add uuid -> Biblioteca para gerar o uuid
yarn add @types/uuid -D -> Tipagens para a uuid

Processo: server -> controller -> service -> ...