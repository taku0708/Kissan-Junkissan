class TopController < ApplicationController
    def index
        @q = Post.ransack(params[:q])
        @posts = @q.result(distinct: true)
        @newpost = Post.limit(10).order(" created_at DESC ")
        @newpost = @newpost.page(params[:page]).per(3)
        @newcomment = Comment.limit(10).order(" created_at DESC ")
        @newcomment = @newcomment.page(params[:page]).per(3)
    end
   
end
