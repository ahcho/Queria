# Rails.application.routes.draw do

#   root to: "static_pages#root"

#   namespace :api, defaults: {format: :json} do
#     resource :user, only: [:create] do
#       resources :answers, only: [:show]
#     end
#     resource :session, only: [:create, :destroy, :show]
#     resources :questions, only: [:index, :create, :show, :update, :destroy] do
#       resources :answers, only: [:index]
#     end
#     resources :answers, only: [:create, :update, :destroy]
#   end

# end
Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :delete, :show]
    resource :users, only: [:show] do
      resources :answers, only: [:show]
      resources :questions, only: [:index]#
    end
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :create, :show, :update, :destroy] do
      resources :answers, only: [:index]
    end
    resources :answers, only: [:create, :update, :destroy]
  end

end
