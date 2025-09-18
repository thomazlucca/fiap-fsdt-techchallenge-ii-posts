import request from "supertest";
import app from "../app.js";
import { connectDB } from "../config/db.js";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";
import mongoose from "mongoose";

let token; // 🔑 Token JWT
let postId;

beforeAll(async () => {
  process.env.MONGO_URI = "mongodb://localhost:27017/test_blog";
  process.env.JWT_SECRET = "12345";
  await connectDB();

  // Limpa coleções antes dos testes
  await Post.deleteMany();
  await User.deleteMany();

  // 🔹 Cria o usuário admin
  await request(app).post("/auth/register").send({
    username: "admin",
    password: "admin123",
  });

  // 🔹 Faz login com admin para obter o token
  const res = await request(app).post("/auth/login").send({
    username: "admin",
    password: "admin123",
  });

  console.log("RESPOSTA LOGIN:", res.statusCode, res.body);

  token = res.body.token;

  if (!token) {
    throw new Error("ERRO: Nenhum token foi retornado no login!");
  }
});

afterAll(async () => {
  await Post.deleteMany();
  await User.deleteMany();
  await mongoose.connection.close();
});

describe("Posts API", () => {
  it("deve criar um novo post", async () => {
    const res = await request(app)
      .post("/posts")
      .set("Authorization", `Bearer ${token}`)
      .send({
        titulo: "Post de Teste",
        conteudo: "Conteúdo de teste",
        autor: "Tester",
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    postId = res.body._id;
  });

  it("deve listar todos os posts", async () => {
    const res = await request(app).get("/posts");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("deve buscar um post pelo id", async () => {
    const res = await request(app).get(`/posts/${postId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id", postId);
  });

  it("deve atualizar um post", async () => {
    const res = await request(app)
      .put(`/posts/${postId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        titulo: "Post Atualizado",
        conteudo: "Novo conteúdo",
        autor: "Tester",
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.titulo).toBe("Post Atualizado");
  });

  it("deve buscar posts por termo", async () => {
    const res = await request(app).get("/posts/search?q=Atualizado");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("deve deletar um post", async () => {
    const res = await request(app)
      .delete(`/posts/${postId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(204);
  });
});
