# 📋 Teste Técnico - Sync360


## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue.js** 
- **Vue Router** 
- **Axios** 


### Backend
- **Laravel** 
- **MySQL**


## 🚀 Funcionalidades

- ✅ [Funcionalidade 1]
- ✅ [Funcionalidade 2]
- ✅ [Funcionalidade 3]
- ✅ [Funcionalidade 4]

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **PHP** (versão 8.0 ou superior)
- **Composer**
- **MySQL**
- **Git**

## 🔧 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_PROJETO]
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

# Edite o arquivo .env.local com a URL da API
# VUE_APP_API_URL=http://localhost:8000/api

# Inicie o servidor de desenvolvimento
npm run serve
```

## 🌐 Endpoints da API


### [Outros endpoints relevantes]
- `GET /api/users` - Listar 
- `POST /api/users/create` - Criar 
- `PUT /api/users/{id}` - Atualizar 
- `DELETE /api/users/{id}` - Deletar

## 📱 Acesso à Aplicação

Após a instalação:

- **Frontend**: http://localhost:3000 (ou a porta configurada)
- **Backend API**: http://localhost:8000/api



## 🧪 Testes

### Backend
```bash
cd backend
php artisan test
```

### Frontend
```bash
cd frontend
npm run test
```

## 📝 Observações Importantes

- O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento
- Implementação de validações tanto no frontend quanto no backend
- Tratamento de erros e feedback adequado ao usuário
- Código comentado e organizado para facilitar a manutenção
- [Outras observações relevantes]

## 🔍 Decisões Técnicas

### Arquitetura
- Separação clara entre frontend e backend
- Uso de padrões REST para a API
- Implementação de middleware para autenticação e validação

