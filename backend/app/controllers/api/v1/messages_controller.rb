class Api::V1::MessagesController < ApplicationController
  include NotificationConcern
  def create
    message = Message.new(message_params)

    if message.save
      send_notification_to_receiver(message)
      render json: { status: 200, message: message }
    else
      render json: { status: 500, message: message.errors }
    end
  end

  private

  def message_params
    params.permit(:chatroom_id, :user_id, :content)
  end

  def send_notification_to_receiver(message)
    send_notification(
      message.user_id,
      "You received a message from #{message&.user&.name}: #{message&.content}",
      message&.user&.image&.url || nil,
      "/chatrooms/#{message&.chatroom_id}"
    )
  end
end
