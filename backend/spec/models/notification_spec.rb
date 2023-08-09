# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Notification, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      notification = Notification.new(user_id: 1, content: 'notification content', image_url: 'notification image url',
                                      link_url: 'notification link url', is_checked: false)
      expect(notification).to be_valid
    end
  end
end
