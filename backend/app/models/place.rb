class Place < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates_integrity_of :image

  validates :location, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true

  def as_json(_options = {})
    super(only: %i[id location latitude longitude image])
  end
end
