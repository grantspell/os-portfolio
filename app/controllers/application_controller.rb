class ApplicationController < ActionController::API

    def index
        @projects = Project.all

        render json: @projects
    end
    
end
