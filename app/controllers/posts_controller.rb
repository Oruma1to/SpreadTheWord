# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]

  # # GET /posts
  # def index
  #   @user = User.find(params[:user_id])
  #   @posts = Post.where(user_id: @user.id)

  #   render json: @posts, include: { user: { only: %i[username admin] } }, status: :ok
  # end

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: { user: { only: %i[username admin] } }, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, include: { user: { only: %i[username admin] } }, status: :ok
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def post_params
    params.require(:post).permit(:title, :img_url, :content)
  end
end
