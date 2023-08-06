class Comment < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :event, optional: true

  validates :content, presence: true, length: { maximum: 200 }
  validates :user_id, presence: true
  validates :event_id, presence: true

  def as_json(_options = {})
    super(include: [
      user: { only: %i[id name image] }
    ])
  end
end
