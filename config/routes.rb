Rails.application.routes.draw do

  namespace :api do
    get "/projects", to: "projects#index", as: "projects"
  end
  
end
