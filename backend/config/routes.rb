Rails.application.routes.draw do
  root :to => 'api/v1/events#index'
  namespace :api do
    namespace :v1 do
      get 'events/index'
      get 'test/index'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
