# frozen_string_literal: true

require 'rails_helper'

# TODO: Add login to all requests
RSpec.describe 'Chatrooms', type: :request do
  # let(:user) do
  #   User.find_or_create_by(email: 'john@example.com') do |u|
  #     u.name = 'John Doe'
  #     u.password = '00000000'
  #     u.password_confirmation = '00000000'
  #   end
  # end

  # let(:auth_headers) { authentication_headers_for(user) }

  # describe 'GET /index' do
  #   it 'returns http success' do
  #     get '/api/v1/chatrooms', headers: auth_headers
  #     expect(response).to have_http_status(:success)
  #   end
  # end

  # describe 'GET /show' do
  #   it 'returns http success' do
  #     chatroom = Chatroom.find_or_create_by(id: 1)
  #     get "/api/v1/chatrooms/#{chatroom.id}", headers: auth_headers
  #     expect(response).to have_http_status(:success)
  #   end
  # end

  # def authentication_headers_for(user)
  #   post '/api/v1/auth/sign_in', params: { email: user.email, password: '00000000' }
  #   {
  #     'access-token' => response.headers['access-token'],
  #     'token-type' => 'Bearer',
  #     'client' => response.headers['client'],
  #     'expiry' => response.headers['expiry'],
  #     'uid' => response.headers['uid']
  #   }
  # end
end
