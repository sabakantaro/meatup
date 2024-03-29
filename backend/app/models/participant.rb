class Participant < ApplicationRecord
  include NotificationConcern
  belongs_to :user, optional: true
  belongs_to :event, optional: true

  def create_chatroom
    chatroom = Chatroom.create
    ChatroomUser.find_or_create_by(
      chatroom_id: chatroom.id,
      user_id: user_id
    )
    event = Event.find_by(id: event_id)
    ChatroomUser.find_or_create_by(
      chatroom_id: chatroom.id,
      user_id: event.user_id
    )
  end

  def notify
    send_notification(
      participant.user_id,
      "#{participant&.user&.name} participantd in #{participant&.event&.title}! Start to chat!",
      participant&.event&.user&.image&.url,
      '/chatrooms'
    )
  end
end
