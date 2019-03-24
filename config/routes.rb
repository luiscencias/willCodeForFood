Rails.application.routes.draw do
  resources :events
  get 'events/new'
  get 'events' => 'events#index'
  # get 'events'
  resources :members
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
