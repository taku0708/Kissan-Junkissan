class UsersController < ApplicationController
    def show
        @user = User.find(params[:id]) 
        @userlikes = @user.likes
        @userlikes = @userlikes.page(params[:page]).per(3)
        @usercomments = @user.comments
        @usercomments = @usercomments.page(params[:page]).per(3)
    end
end
