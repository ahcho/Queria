class Api::QuestionsController < ApplicationController
    before_action :require_login

    #shows all questions or questions belong to a user or topic
    def index
        @questions = Question.all #needs to be updated later !!!!!!!!!!!!! selected by topic_id and user_id
        render :index
    end


    def create
        @question = Question.new(question_params)
        if @question.save
            render :show
        else
            render json: ["Fail to create a question"], status: 422
        end
    end

    def search
        target = params[:target].downcase
        @questions = User.where("LOWER(body) LIKE", "%#{target}%")
        render :index
    end 

    # def show
    #     @question = Question.find_by(id: params[:id])
    #     render :show
    # end

    def show
        @question = Question.find_by(id: params[:id])
        render :show
    end
    
    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render :show
        else
            render json: ["fail to upload the question"], status: 404
        end
    end

    def destroy
        @question = Question.find(params[:id])
        if @question.destroy
            @questions = Question.all
            render :index 
        else 
            render json: ["fail to delete the question"], status: 404
        end
    end

    private

    def question_params
        params.require(:question).permit(:question, :author_id, :topic_id, :target, :question_id, :photo)
    end
end
