# Let me Ask

Projeto desenvolvido durante um evento da Rocketseat.

## Tecnologias e Bibliotecas

![Tecnologias](https://skillicons.dev/icons?i=ts,nodejs,postgres,docker)

- **Fastify** (servidor HTTP)
- **Zod** (validação de dados)
- **Drizzle ORM** (mapeamento e migração de banco de dados)
- **PostgreSQL** (banco de dados relacional)
- **Pino** (logger, integrado ao Fastify)
- **@fastify/cors** (CORS)
- **@fastify/multipart** (upload de arquivos)
- **@google/genai** (integração com Gemini API)

## Padrão de Projeto

- Estrutura modular por domínio (ex: `src/http`, `src/db`, `src/env`)
- Validação de ambiente com Zod
- Configuração de logger customizado
- Uso de embeddings para processamento de linguagem natural
- Transcrição de áudio e geração de respostas com IA

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
GEMINI_API_KEY=sua-chave-api-gemini
```

### 3. Rode as migrações do banco

```bash
npm run db:migrate
```

### 4. Inicie o servidor em modo desenvolvimento

```bash
npm run dev
```

## Funcionalidades

- Criação de salas para perguntas e respostas
- Upload de áudio para transcrição
- Geração de embeddings para processamento de linguagem natural
- Busca semântica por similaridade de vetores
- Geração de respostas com base no contexto das transcrições

---

> Projeto "Let me Ask" desenvolvido durante um evento da Rocketseat.
