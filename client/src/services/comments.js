import api from './api-helper'

 export const getAllPosts = async () => {
  const resp = await api.get(`/users/:id/posts/:id/comments`)
  return resp.data
}


export const getOnePost = async (id) => {
  const resp = await api.get(`/users/:id/posts/:id/comments/${id}`)
  return resp.data
}

export const createComment = async (commentData) => {
  const resp = await api.post('/users/:id/posts/:id/comments/', {comment: commentData})
  return resp.data
}

export const updateComment = async (id, commentData) => {
  const resp = await api.put(`/users/:id/posts/:id/comments/${id}`, {comment: commentData})
  return resp.data
}

export const deleteComment= async (id) => {
  const resp = await api.delete(`/users/:id/posts/:id/comments/${id}`)
  return resp.data
}

