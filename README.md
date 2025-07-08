# Teste Técnico - Sync360


## Tecnologias Utilizadas

### Frontend
- **Vue.js** 
- **Vue Router** 
- **Axios** 


### Backend
- **Laravel** 
- **MySQL**

## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **PHP** (versão 8.0 ou superior)
- **Composer**
- **MySQL**
- **Git**

## Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/NarcelioO/sync360.git
cd sync360
```

### 2. Configuração do Backend (Laravel)

```bash
# Navegue para o diretório do backend
cd backend

# Instale as dependências
composer install

# Copie o arquivo de configuração
cp .env.example .env

# Configure as variáveis de ambiente no arquivo .env
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=nome_do_banco
# DB_USERNAME=seu_usuario
# DB_PASSWORD=sua_senha

# Execute as migrações
php artisan migrate

# Inicie o servidor
php artisan serve
```

### 3. Configuração do Frontend (Vue.js)

```bash
# Em um novo terminal, navegue para o diretório do frontend
cd frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run serve
```

## Endpoints da API

- `GET /api/users` - Listar 
- `POST /api/users/create` - Criar 
- `PUT /api/users/{id}` - Atualizar 
- `DELETE /api/users/{id}` - Deletar

## Acesso à Aplicação

Após a instalação:

- **Frontend**: http://localhost:3175 (ou a porta configurada)
- **Backend API**: http://localhost:8000/api



## Deploy

- **Frontend**: https://frontend-production-afa5.up.railway.app/
- **Backend**: https://sync360-production.up.railway.app/api/users


