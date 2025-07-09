# Let me Ask

Projeto desenvolvido durante um evento da Rocketseat.

## Tecnologias e Bibliotecas

- **Node.js**
- **TypeScript**
- **Fastify** (servidor HTTP)
- **Zod** (validação de dados)
- **Drizzle ORM** (mapeamento e migração de banco de dados)
- **PostgreSQL** (banco de dados relacional)
- **Pino** (logger, integrado ao Fastify)
- **@fastify/cors** (CORS)

## Padrão de Projeto

- Estrutura modular por domínio (ex: `src/http`, `src/db`, `src/env`)
- Validação de ambiente com Zod
- Configuração de logger customizado

## Setup e Configuração

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o banco de dados

- O projeto utiliza PostgreSQL. Você pode subir um container local com Docker Compose:

```bash
docker compose up -d
```

- Configure a variável de ambiente `DATABASE_URL` no arquivo `.env`:

```
DATABASE_URL=postgresql://docker:docker@localhost:5432/let-me-ask
```

### 3. Rode as migrações do banco

```bash
npm run db:migrate
```

### 4. Inicie o servidor em modo desenvolvimento

```bash
npm run dev
```

---

> Projeto "Let me Ask" desenvolvido durante um evento da Rocketseat.
