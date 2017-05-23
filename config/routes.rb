Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'spam#index'
  get '/api/spam', to: 'api/spam#index'
  get '/api/categories', to: 'api/categories#index'
  get "/.well-known/acme-challenge/#{ENV["ACME_KEY"]}", to: "application#index"
end
