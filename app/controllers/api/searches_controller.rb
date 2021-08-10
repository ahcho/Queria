class Api::SearchesController < ApplicationController

    def index
        if params[:query]
            pattern = params[:query].split("").join("%")
            @questions = Question.where("name ILIKE ?", "%#{pattern}%")
        end

        render :result
    end

end
