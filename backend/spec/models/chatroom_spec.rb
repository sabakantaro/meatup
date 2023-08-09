# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Chatroom, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      chatroom = Chatroom.new
      expect(chatroom).to be_valid
    end
  end
end
