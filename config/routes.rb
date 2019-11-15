Rails.application.routes.draw do
  resources :performances
  resources :locations
  resources :bookings
  resources :workshop_dates
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#index"
end
