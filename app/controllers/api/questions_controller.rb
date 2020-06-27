class Api::QuestionsController < ApplicationController
    before_action :require_login

    #shows all questions or questions belong to a user or topic
    def index
        @questions = Question.all #need to be updated later !!!!!!!!!!!!! selected by topic_id and user_id
        render json: @questions
    end

    def create
        @question = Question.new(question_params)
        #@question.author_id = current_user.id
        if @question.save
            @questions = Question.all
            render json: @questions
        else
            render json: ["Fail to create a post"]
        end
    end

    def show
        @question = Question.find(params[:id])
        render json: @question
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render json: @question
        else
            render json: ["fail to upload the question"], status: 404
        end
    end

    def destory
        @question = Question.find(params[:id])
        if @question.destory
            @questions = Question.all
            render :index 
        else 
            render json: ["fail to delete the question"], status: 404
    end

    private

    def question_params
        params.require(:question).permit(:question, :author_id, :topic_id)
    end
end
