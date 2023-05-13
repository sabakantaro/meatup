class Event < ApplicationRecord
  mount_uploader :img, ImageUploader

  validates :description, presence: true, length: { maximum: 140 }
end
