Rails.application.routes.draw do

  #we're going to want to put all our backend routes under this scope /api
  scope '/api' do
  resources :members

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'shop/create'
  resources :shop



  end
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
