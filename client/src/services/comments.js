import api from './api-helper'

 export const getAllComments = async () => {
  const resp = await api.get(`/posts/:id/comments`)
  return resp.data
}


export const getComment = async (id) => {
  const resp = await api.get(`posts/:id/comments/${id}`)
  return resp.data
}

export const createComment = async (commentData) => {
  const resp = await api.post('/posts/:id/comments/', {comment: commentData})
  return resp.data
}

export const updateComment = async (id, commentData) => {
  const resp = await api.put(`/posts/:id/comments/${id}`, {comment: commentData})
  return resp.data
}

export const deleteComment= async (id) => {
  const resp = await api.delete(`/posts/:id/comments/${id}`)
  return resp.data
}

