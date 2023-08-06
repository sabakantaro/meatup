class Message < ApplicationRecord
  include NotificationConcern
  belongs_to :user, optional: true

  def notify
    send_notification(
      user_id,
      "You received a message from #{user.name}: #{content}",
      user.image&.url || nil,
      "/chatrooms/#{chatroom_id}"
    )
  end
end
