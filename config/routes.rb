Rails.application.routes.draw do

  namespace :api do
    get "/projects", to: "projects#index", as: "projects"
    get "/projects/:id", to: "projects#show", as: "project"
  end
  
end
