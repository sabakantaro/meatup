class Api::V1::ParticipantsController < ApplicationController
  include NotificationConcern
  def create
    participant = Participant.create(participants_params)
    create_chatroom(participant)

    if participant.save
      send_notification_to_participant(participant)
      render json: { participant: participant }, status: :ok
    else
      render json: { participant: participant.errors }, status: :internal_server_error
    end
  end

  def destroy
    participant = Participant.find(params[:id])
    participant.destroy
  end

  private

  def participants_params
    params.permit(:event_id, :user_id)
  end

  def create_chatroom(participant)
    chatroom = Chatroom.create
    ChatroomUser.find_or_create_by(
      chatroom_id: chatroom.id,
      user_id: participant.user_id
    )
    event = Event.find_by(id: participant.event_id)
    ChatroomUser.find_or_create_by(
      chatroom_id: chatroom.id,
      user_id: event.user_id
    )
  end

  def send_notification_to_participant(participant)
    send_notification(
      participant.user_id,
      "#{participant&.user&.name} participantd in #{participant&.event&.title}! Start to chat!",
      participant&.event&.user&.image&.url,
      '/chatrooms'
    )
  end
end
