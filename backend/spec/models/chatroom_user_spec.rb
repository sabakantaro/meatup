# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ChatroomUser, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      user = User.create!(name: 'John Doe', email: 'john@example.com', password: '00000000',
                          password_confirmation: '00000000')
      chatroom = Chatroom.create!
      chatroom_user = ChatroomUser.new(user_id: user.id, chatroom_id: chatroom.id)
      expect(chatroom_user).to be_valid
    end
  end
end
