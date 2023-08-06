class Api::V1::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: { comment: comment.as_json }, status: 200
    else
      render json: { errors: comment.errors.full_messages }, status: 500
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.destroy
      head 200
    else
      head 500
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :content, :event_id)
  end
end
