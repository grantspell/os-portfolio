class Api::ProjectsController < ApplicationController

    def index
        @projects = Project.all

        render json: @projects
    end

    def show
        project_id = params[:id]

        @project = Project.find_by_id(project_id)

        render json: @project
    end
    
end
