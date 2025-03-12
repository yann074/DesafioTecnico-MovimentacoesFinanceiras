# Sistema de RH

Este é o Sistema de RH desenvolvido com Laravel no backend e Vue.js no frontend. Ele fornece uma API REST para comunicação com o frontend, incluindo funcionalidades de autenticação usando Sanctum.

## Como rodar o projeto

### Passo 1: Clonar o repositório
Clone o repositório do Sistema de RH para o seu ambiente local:

```bash
git clone https://github.com/yann074/DesafioTecnico-Movimentacoes
cd DesafioTecnico-Movimentacoes
```

---

## Backend (Laravel)

### Passo 2: Instalar dependências do backend
Acesse a pasta do backend e instale as dependências:

```bash
cd back-estagio
composer install
```

### Passo 3: Configuração do ambiente
Copie o arquivo .env.example para .env:

```bash
cp .env.example .env
```

Em seguida, configure o banco de dados e outras variáveis no arquivo .env. Exemplo de configuração de banco de dados:

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sistema_rh
DB_USERNAME=root
DB_PASSWORD=
```

Foi usado MySQL, por isso, abra algum aplicativo de banco de dados e crie o banco usado no Laravel, como por exemplo:

```bash
create database sistema_rh;
```

Gerar a chave da aplicação:

```bash
php artisan key:generate
```

### Passo 4: Configuração do Sanctum (Autenticação)
Publicar as configurações do Sanctum:

```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Executar as migrações:

```bash
php artisan migrate
```

Carregar dados para login (seeders):

```bash
php artisan db:seed
```

### Passo 5: Rodar o servidor Laravel

```bash
php artisan serve
```

Isso iniciará o servidor na URL: [http://localhost:8000](http://localhost:8000)


---

## Frontend (Vue.js)

### Passo 2: Instalar dependências do frontend

Abra outro terminal, acesse a pasta de DesafioTecnico-Movimentacoes e instale as dependências:

```bash
cd front-estagio
npm install
```

### Passo 3: Rodar o Projeto
Agora você pode rodar o frontend em modo de desenvolvimento com o comando:

```bash
npm run serve
```

O frontend estará disponível em: [http://localhost:8080](http://localhost:8080)

### Passo 4: Dados para o Login
Use os seguintes dados para realizar o login:

```plaintext
Email: userteste@gmail.com
Senha: senha123
```

---

## Contato
Caso precise de suporte ou queira contribuir, fique à vontade para abrir uma issue no repositório ou entrar em contato.

---

**Desenvolvido por [Yann Smith](https://github.com/yann074)**

