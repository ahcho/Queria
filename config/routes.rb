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
#everything is going to live under one API
#RESTful api, naming convention of REST api
#single end point api  ideally, I want my backend to touch one frontend
# all of the ajax calls, uers/api/question => single end point
# when ajax call goes from frontend to backend, rails magic,
# it will take the call to the right destination
# /users/answers
# /users/questions
# I want to bring only n questions to be efficient 
# I have 1000s of questions and can't bring 1000s, limit number o f..
# Designed RESTful API endpoints using a PostgreSQL database to dynamically 
# serve data to the frontend in order to provide fast user experience.
# HOW I WROTE THIS THINK?
### ???????????????????????????
# I WROTE MY ROUTE UNDER RESTFUL NAMING CONVENTION(PATH CONVENTION)
# CONTROLLER TO ACCEPT THIS REQUEST
# DYNAMIC DATA: THE DATA IS DYNAMIC BASED ON WHAT'S IN THE BACK
# SAME REQUEST CAN GET DIFFERENT RESULT, IF I ASK TWO MORE QUESTIONS
# IT WILL SHOW TWO UPDATED QUESTIONS. 
# IF DATA IN THE BACKEND IS CHANGED, AND I MAKE THE SAME REQUSION
# STATIC DATA: HTML, GAME DATA IS STILL STATIC (NO BACKEND)
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :delete, :show, :update]
    resources :users, only: [:show] do
      resources :answers, only: [:index]
      resources :questions, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :show, :update, :destroy] do
      resources :answers, only: [:index]
    end
    resources :answers, only: [:create, :update, :destroy]
    resources :comments, only: [:index, :destroy, :update, :create]
    resources :topics, only: [:index, :show]
  end

end
