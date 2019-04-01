Rails.application.routes.draw do

  namespace :api do
      namespace :v1 do
        resources :orders, only: [:index, :create, :show]
      end
    end
  end
