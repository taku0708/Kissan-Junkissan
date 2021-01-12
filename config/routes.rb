Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :posts do
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :edit, :update]
    collection do
      get 'done'
    end
  end

  resources :comments do
    resources :nices, only: [:create, :destroy]
  end

  get 'posts/search' => 'posts#search'

  root "top#index"
end
