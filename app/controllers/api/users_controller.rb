class Api::UsersController < ApplicationController
    
    def index
        @users = User.all 
        render :index
    end

    def create
        @user = User.new(email: params[:user][:signup_email], 
            password: params[:user][:signup_pw],
            first_name: params[:user][:fname],
            last_name: params[:user][:lname])

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
           
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: ["fail to update an user"], status: 404
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:id, :signup_email, :signup_pw, :fname, :lname, :photo)
    end
end
