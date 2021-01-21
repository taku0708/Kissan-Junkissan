class PostsController < ApplicationController

    before_action :authenticate_user!, only: [:new, :create, :edit]

    def index
        @qsearch = Post.search(search_params)
        @posts = @qsearch.result(distinct: true)
        @posts = @posts.page(params[:page]).per(5)
    end

    def new
        @post = Post.new
    end

    def create
        post = Post.new(post_params)

        post.user_id = current_user.id
        
        if post.save
            redirect_to done_posts_path
        else
            redirect_to :action => "new"
        end
    end

    def show
        @post = Post.find(params[:id])
        @comments = @post.comments
        @comments = @comments.page(params[:page]).per(3)
        @comment = Comment.new
    end

    def edit
        @post = Post.find(params[:id])
    end

    def update
      post = Post.find(params[:id])

      if post.update(post_params)
         redirect_to done_posts_path
      else
         redirect_to :action => "new"
      end
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        redirect_to root_path
    end

    def done
    end


    private
    def post_params
        params.require(:post).permit(:name,:prefecture,:address,:tel,:nearest_station,:hp,:business_hours,:parking,:image, :wifi, :dessert, :outlet, :lunch, :tobacco, :snack, :other, :image_two, :image_three, :image_four, :image_five, :image_six)
    end

    def search_params
        params.require(:q).permit(:name_cont, :wifi_eq, :dessert_eq, :parking_eq, :outlet_eq, :lunch_eq, :tobacco_eq, :snack_eq)
    end



end





