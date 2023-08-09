# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users', type: :request do
  describe 'GET /show' do
    it 'returns http success' do
      user = User.find_or_create_by(email: 'john@example.com') do |u|
        u.name = 'John Doe'
        u.password = '00000000'
        u.password_confirmation = '00000000'
      end

      get "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(:success)
    end
  end

  describe 'PATCH /update' do
    it 'returns http success' do
      user = User.find_or_create_by(email: 'john@example.com') do |u|
        u.name = 'John Doe'
        u.password = '00000000'
        u.password_confirmation = '00000000'
      end

      patch "/api/v1/users/#{user.id}",
            params: { user: { name: 'Jane Doe', password: '00000000' } }
      expect(response).to have_http_status(:success)
    end
  end
end
