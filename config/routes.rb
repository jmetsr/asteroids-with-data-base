Rails.application.routes.draw do
  root to: 'asteroids#index'
  resources :scores
end
