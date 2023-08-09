# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Bookmark, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      bookmark = Bookmark.new(user_id: 1, event_id: 1)
      expect(bookmark).to be_valid
    end
  end
end
