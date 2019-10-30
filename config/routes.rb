Rails.application.routes.draw do
  root 'homes#index'
  get '/charities', to: 'homes#index'
  get '/charities/:id', to: 'homes#index'
  get '/events', to: 'homes#index'
  get '/events/:id', to: 'homes#index'
  get '/events/new', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :charities, only: [ :index, :show ]
      resources :events, only: [ :index, :show, :create ]
    end
  end
end
