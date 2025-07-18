# 📚 API de Blog para Professores

Sistema de posts para professores da rede pública compartilharem conteúdos com alunos, feito em Node.js + MongoDB.

---

## 🚀 Funcionalidades

| Método | Rota           | Descrição                              |
|---------|----------------|----------------------------------------|
| GET     | /posts         | Lista todos os posts                   |
| GET     | /posts/:id     | Retorna um post pelo ID                |
| POST    | /posts         | Cria um novo post                      |
| PUT     | /posts/:id     | Atualiza um post existente             |
| DELETE  | /posts/:id     | Deleta um post                         |
| GET     | /posts/search?q= | Busca posts por termo no título/conteúdo |

---

## 🛠️ Tecnologias

- Node.js (ESModules)
- Express
- MongoDB com Mongoose
- Docker e Docker Compose
- Jest + Supertest (Cobertura mínima de 20%)
- GitHub Actions (CI/CD)

---

## ⚙️ Como rodar localmente

### Pré-requisitos:

- Node.js 20+
- Docker e Docker Compose

### Rodando com Docker

```bash
docker-compose up --build

Acesse:
http://localhost:3000/posts


🧪 Rodando os testes

npm install
npm test

Os testes cobrem:
Criação de post
Listagem de posts
Consulta por ID
Edição
Remoção
Busca por termo

🗂️ Estrutura do projeto

src/
├── api/
├── controllers/
│   └── postController.js
├── routes/
│   └── postRoutes.js
├── config/
│   └── db.js
├── models/
│   └── post.js
├── repositories/
│   └── postRepository.js
├── services/
│   └── postService.js
├── tests/
│   └── posts.test.js
├── app.js
server.js
docker-compose.yml
Dockerfile
.github/workflows/ci.yml


📦 Deploy e CI/CD
O projeto conta com workflow automatizado via GitHub Actions:

Instala dependências

Sobe MongoDB em container
Roda testes automatizados
Gera cobertura de código

📝 Documentação da API
Exemplo de POST:

POST /posts
Content-Type: application/json

{
  "titulo": "Minha Aula de História",
  "conteudo": "Hoje falamos sobre a Revolução Industrial.",
  "autor": "Professora Maria"
}


👥 Equipe
Desenvolvido por:
Thomaz
Mateus
João
