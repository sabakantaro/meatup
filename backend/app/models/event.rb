class Event < ApplicationRecord
  has_many :participants, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :comments, dependent: :destroy
  belongs_to :user, optional: true
  belongs_to :place, optional: true

  validates :description, presence: true, length: { maximum: 500 }
  validates :title, presence: true, length: { maximum: 50 }
  validates :meeting_datetime, presence: true
  validates :user_id, presence: true
  validates :place_id, presence: true

  def as_json(_options = {})
    super(include: {
      user: { only: %i[id name] },
      place: { only: %i[id location latitude longitude image] },
      participants: { only: %i[id event_id user_id] }
    })
  end
end
