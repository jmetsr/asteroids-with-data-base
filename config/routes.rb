Rails.application.routes.draw do
  root to: 'asteroids#root'
  resources :scores
  get 'asteroids/index', :to => 'asteroids#index'
end
