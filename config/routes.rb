# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users do
    resources :posts do
      resources :comments
    end
  end

  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'
  post '/posts', to: 'posts#create'
  put '/posts/:id', to: 'posts#update'
  delete '/posts/:id', to: 'posts#destroy'

  get '/posts/:id/comments', to: 'comments#index'
  get '/posts/:id/comments/:id', to: 'comments#show'
  get '/posts/:id/comments', to: 'comments#create'
  get '/posts/:id/comments/:id', to: 'comments#update'
  get '/posts/:id/comments/:id', to: 'comments#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
