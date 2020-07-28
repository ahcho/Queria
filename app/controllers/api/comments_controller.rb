class Api::CommentsController < ApplicationController

    def index
        @answer = Answer.find(params[:answer_id])
        @comments = @answer.comments
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: ["Fail to create a comment"], status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            redner :show
        else
            render json: ["Fail to update a comment"], status: 422
        end
    end
    
    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: ["Fail to create a comment"], status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :answer_id)
    end

end
