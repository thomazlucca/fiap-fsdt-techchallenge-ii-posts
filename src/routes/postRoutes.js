import { Router } from "express";
import * as controller from "../controllers/postController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     responses:
 *       200:
 *         description: Retorna a lista de posts
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /posts/search:
 *   get:
 *     summary: Busca posts por termo
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Termo de busca
 *     responses:
 *       200:
 *         description: Lista de posts encontrados
 */
router.get("/search", controller.search);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retorna um post pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post (autenticado)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               conteudo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post("/", verifyToken, controller.create);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post (autenticado)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               conteudo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Post não encontrado
 */
router.put("/:id", verifyToken, controller.update);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post (autenticado)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Post deletado
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Post não encontrado
 */
router.delete("/:id", verifyToken, controller.remove);

export default router;
