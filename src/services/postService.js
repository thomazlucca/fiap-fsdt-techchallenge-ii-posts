import * as repository from "../repositories/postRepository.js";

export const listPosts = () => repository.getAllPosts();

export const getPost = (id) => repository.getPostById(id);

export const create = (data) => repository.createPost(data);

export const update = (id, data) => repository.updatePost(id, data);

export const remove = (id) => repository.deletePost(id);

export const search = (q) => repository.searchPosts(q);
