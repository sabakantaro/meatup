# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Participants', type: :request do
  describe 'POST /create' do
    it 'returns http success' do
      post '/api/v1/participants', params: { user_id: 1, event_id: 1 }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE /destroy' do
    it 'returns http success' do
      participant = Participant.find_or_create_by(user_id: 1, event_id: 1)
      delete "/api/v1/participants/#{participant.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
