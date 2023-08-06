class Api::V1::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    if message.save
      message.notify
      render json: { status: 200, message: message }
    else
      render json: { status: 500, message: message.errors }
    end
  end

  private

  def message_params
    params.permit(:chatroom_id, :user_id, :content)
  end
end
