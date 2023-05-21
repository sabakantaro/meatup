# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :events, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :chatroom_users, dependent: :destroy
  has_many :chatrooms, through: :chatroom_users, dependent: :destroy
  has_many :messages, dependent: :destroy

  mount_uploader :image, ImageUploader

  def as_json(_options = {})
    super(
      only: %i[id name email image profile birth_date gender created_at],
      include: [
        events: {
          only: %i[id title description meeting_datetime],
          include: [
            place: {
              only: %i[id location latitude longitude image]
            }
          ]
        },
        comments: { only: %i[id content] },
        bookmarks: { only: %i[id event_id] }
      ],
    )
  end
end
