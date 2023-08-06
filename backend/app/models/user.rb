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
  has_many :notifications, dependent: :destroy

  mount_uploader :image, ImageUploader

  validates_integrity_of :image

  validates :name, presence: true, length: { maximum: 20 }
  validates :email, presence: true, length: { maximum: 50 }
  validates :profile, length: { maximum: 500 }

  def as_json(_options = {})
    slice_attrs = %i[id name email image profile birth_date gender created_at]

    include_attrs = {
      events: { only: %i[id title description meeting_datetime],
                include: { place: { only: %i[id location latitude longitude image] } } },
      comments: { only: %i[id content] },
      bookmarks: { only: %i[id event_id] },
      notifications: { only: %i[id content image_url link_url is_checked created_at] }
    }

    super(only: slice_attrs, include: include_attrs)
  end
end
