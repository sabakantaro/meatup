class Comment < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :event, optional: true

  def as_json(_options = {})
    super(
      include: [
        user: {
          only: %i[id name image],
        }
      ],
    )
  end
end
