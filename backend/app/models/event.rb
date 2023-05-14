class Event < ApplicationRecord
  validates :description, presence: true, length: { maximum: 140 }
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
        }
      ],
    )
  end
end
