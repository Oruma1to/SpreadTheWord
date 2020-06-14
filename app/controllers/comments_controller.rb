# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]

  # GET /posts/id/comments/
  def index
    @comments = Comment.all

    render json: @comments.to_json(include: { post: { include: { user: { only: %i[username admin] } } } }), status: :ok
  end

  # GET /posts/id/comments/id
  def show
    render json: @comment.to_json(include: { post: { include: { user: { only: %i[username admin] } } } }), status: :ok
  end

  # POST /posts/id/comments/
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/id/comments/id
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/id/comments/id
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit(:content)
  end
end
