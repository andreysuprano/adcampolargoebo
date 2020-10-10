# API para aplicação com foco em gestão centralizada de sites/clientes para Agência Digital!

Steps to run this project:

1. Clone this repository
2. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm install nodemon -D` command or `yarn add nodemon -D`
4. Run `yarn dev` command or `npm dev`

## Steps para gestão básica de site
- [ ] Criar endpoint de Cadastro de Clientes 
- [ ] Criar endpoint de Cadastro de Sites
- [ ] Criar endpoint de Cadastro de Postagens para o Blog
- [ ] Criar endpoint de Cadastro de dados do Analytics

## Steps Geração de Relatórios para o Site
- [ ] Criar endpoints para consumir API do Google Analytics

## Steps Aprovação e não aprovação de publicações
- [ ] Criar endpoints para inclusão de nova publicação a ser aprovada
- [ ] Criar endpoints para inclusão de texto dos dados da publicação
- [ ] Criar endpoints para inclusão de imagem destacada da postagem

# Rodando banco de dados com Docker

## Requisitos: 
1. Instalação do Docker
2. Pull da imagem do banco de dados que deseja utilizar (mysql, mariadb, postgres, SQLite, SQL Server)

## Exemplo:
    
### mariadb 
run `docker run -p **3306**:**3306** --name **NomeDoContainer** -e MYSQL_ROOT_PASSWORD=**SuaSenhaDB** -d mariadb`  

Você pode selecionar a porta/NomeDoContainer/SenhaDB nas variáveis entre **

### MySql 
run `docker run -p **3306**:**3306** --name **NomeDoContainer** -e MYSQL_ROOT_PASSWORD=**SuaSenhaDB** -d mysql`  

Você pode selecionar a porta/NomeDoContainer/SenhaDB nas variáveis entre **