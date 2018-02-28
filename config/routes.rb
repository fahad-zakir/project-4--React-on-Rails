Rails.application.routes.draw do
  namespace :api do
  get "users/index"
  get 'users/show'
  get 'users/update'
  get 'users/destroy'
  get 'comments/index'
  get 'comments/update'
  get 'comments/destroy'
  get 'api/index'
  get 'api/destroy'
  get 'activities/index'
  get 'activities/show'
  end
    namespace :api do
      resources :cities do
        resources :activities do
          resources :comments 
        end
      end
    end
end
  




