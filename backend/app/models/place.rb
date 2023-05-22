class Place < ApplicationRecord
  mount_uploader :image, ImageUploader

  def as_json(_options = {})
    super(
      only: %i[id location latitude longitude image]
    )
  end
end
