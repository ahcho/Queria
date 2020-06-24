class Api::UsersController < ApplicationController
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

    private
    
    def user_params
        params.require(:user).permit(:signup_email, :signup_pw, :fname, :lname)
    end
end