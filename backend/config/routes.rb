Rails.application.routes.draw do
  root 'api/v1/events#index' # Add root wit status 200 to deploy render
  namespace :api do
    namespace :v1 do
      resources :events, only: %i[index show create destroy] do
        resources :comments, only: %i[create destroy]
        resources :bookmarks, only: %i[create destroy]
      end
      get 'events/index'
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }
      resources :places, only: %i[index create destroy]
      resources :users, only: %i[show update]
      resources :participants, only: %i[create destroy]
      resources :chatrooms, only: %i[index show]
      resources :messages, only: %i[create]
      resources :notifications, only: %i[index update]

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
