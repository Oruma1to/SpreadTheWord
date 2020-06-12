# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users do
    resources :posts do
      resources :comments
    end
  end

  get '/posts', to: 'posts#all'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
