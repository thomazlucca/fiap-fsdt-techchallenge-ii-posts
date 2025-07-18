import * as service from "../services/postService.js";

export const getAll = async (req, res) => res.json(await service.listPosts());

export const getById = async (req, res) => {
  const post = await service.getPost(req.params.id);
  if (!post) return res.status(404).json({ message: "Post não encontrado" });
  res.json(post);
};

export const create = async (req, res) => {
  const newPost = await service.create(req.body);
  res.status(201).json(newPost);
};

export const update = async (req, res) => {
  const updated = await service.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Post não encontrado" });
  res.json(updated);
};

export const remove = async (req, res) => {
  const deleted = await service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Post não encontrado" });
  res.status(204).end();
};

export const search = async (req, res) => {
  const results = await service.search(req.query.q);
  res.json(results);
};
