class Event < ApplicationRecord
  validates :description, presence: true, length: { maximum: 140 }
  has_many :participants, dependent: :destroy
  has_many :events_favorites, dependent: :destroy
  has_many :comments, dependent: :destroy
  belongs_to :user, optional: true
  belongs_to :place, optional: true

  def as_json(_options = {})
    super(
      include: [
        user: {
          methods: %i[id name]
        },
        place: {
          only: %i[id location latitude longitude image]
        },
        participants: {
          only: %i[id event_id user_id],
        }
      ],
    )
  end
end
