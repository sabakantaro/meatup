class Api::V1::ChatroomsController < ApplicationController
  before_action :set_chatroom, only: %i[show]

  def index
    chatrooms = []

    current_api_v1_user.chatrooms.order('created_at DESC').each do |chatroom|
      chatrooms << {
        chatroom: chatroom,
        other_user: chatroom.users.where.not(id: current_api_v1_user.id)[0],
        last_message: chatroom.messages[-1]
      }
    end

    render json: { status: 200, chatrooms: chatrooms }
  end

  def show
    other_user = @chatroom.users.where.not(id: current_api_v1_user.id)[0]
    messages = @chatroom.messages.order('created_at ASC')

    render json: { status: 200, other_user: other_user, messages: messages }
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find_by(id: params[:id])
  end
end
