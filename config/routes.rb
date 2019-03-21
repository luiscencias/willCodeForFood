Rails.application.routes.draw do


  resources :members

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
