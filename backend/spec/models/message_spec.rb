# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      message = Message.new(content: 'message content', user_id: 1, chatroom_id: 1)
      expect(message).to be_valid
    end
  end
end
