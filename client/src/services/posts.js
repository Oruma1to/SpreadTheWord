import api from './api-helper'

export const getAllPosts = async () => {
  const resp = await api.get(`/users/:id/posts`)
  return resp.data
}

export const getPost = async (id) => {
  const resp = await api.get(`/users/:id/posts/${id}`)
  return resp.data
}

export const createPost = async (postData) => {
  const resp = await api.post('/users/:id/posts', { post: postData })
  return resp.data
}

export const updatePost = async (id, postData) => {
  const resp = await api.put(`/users/:id/posts/${id}`, { post: postData })
  return resp.data
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/users/:id/posts/${id}`)
  return resp.data
}