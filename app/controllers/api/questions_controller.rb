class Api::QuestionsController < ApplicationController
    before_action :require_login

    #shows all questions or questions belong to a user or topic
    def index
        @questions = Question.all
        
    end

    def create
        @question = Question.new(question_params)
        @question.author_id = current_user.id
    end

    def show
    end

    def update
    end

    def destory
    end

    private

    def question_params
        params.require(:question).permit(:title, :author_id, :topic_id)
    end
end
