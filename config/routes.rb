Rails.application.routes.draw do

  namespace :api do
    get "/projects", to: "projects#index", as: "projects"
    get "/projects/:id", to: "projects#show", as: "project"

    get "/archives", to: "archives#index", as: "archives"
    get "/archives/:id", to: "archives#show", as: "archive"
  end
  
end
