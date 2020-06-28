class Api::AnswersController < ApplicationController

    def index
        #if params.has_key?(:question_id)
        @question = Question.find_by(id: params[:question_id])
        @answers = @question.answers
        render :index
    end
    
    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render :show
        else
            render json: ["fail to create an answer"], status 422
        end
    end

    #show answers by an user (in user profile)
    def show
        if params.has_key?(:user_id)
            user = User.find_by(id: params[:user_id])
            @answer = user.answers
        end
        
        render :show
    end


    def update
        @answer = Answer.find_by(id: params[:id])
        if @answer.update(answer_params)
            render :show
        else
            render json: ["fail to update an answer"], status 404
        end
    end

    def destroy
        @answer = Answer.find(params[:id])
        if @answer
            @answer.destroy
            render :show
        else 
            render json: ["fail to delete an answer"], status 404
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:body, :question_id, :author_id)
    end

end
