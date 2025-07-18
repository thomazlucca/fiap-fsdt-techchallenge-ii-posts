import { Post } from "../models/post.js";

export const getAllPosts = () => Post.find();

export const getPostById = (id) => Post.findById(id);

export const createPost = (data) => Post.create(data);

export const updatePost = (id, data) => Post.findByIdAndUpdate(id, data, { new: true });

export const deletePost = (id) => Post.findByIdAndDelete(id);

export const searchPosts = (query) => Post.find({
  $or: [
    { titulo: { $regex: query, $options: "i" } },
    { conteudo: { $regex: query, $options: "i" } }
  ]
});
