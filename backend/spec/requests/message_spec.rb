# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Messages', type: :request do
  describe 'POST /create' do
    it 'returns http success' do
      user = User.find_or_create_by(email: 'john@example.com') do |u|
        u.name = 'John Doe'
        u.password = '00000000'
        u.password_confirmation = '00000000'
      end
      post '/api/v1/messages', params: { user_id: user.id, content: 'Content' }
      expect(response).to have_http_status(:success)
    end
  end
end
