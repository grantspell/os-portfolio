class Api::ArchivesController < ApplicationController
    
    def index
        @archives = Archive.all

        render json: @archives
    end

    def show
        archive_id = params[:id]

        @archive = Archive.find_by_id(archive_id)
        
        render json: @archive
    end
    
end