Rails.application.routes.draw do
  root to: 'asteroids#index'
  resources :scores
  get 'asteroids/index', :to => 'asteroids#index'
end
