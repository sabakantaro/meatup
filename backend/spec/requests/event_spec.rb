# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Events', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/events'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      event = Event.find_or_create_by(description: 'Event description', title: 'Event title',
                                      meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      get "/api/v1/events/#{event.id}"
    end
  end

  describe 'POST /create' do
    it 'returns http success' do
      post '/api/v1/events', params: { description: 'Event description', title: 'Event title',
                                       meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1 }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE /destroy' do
    it 'returns http success' do
      event = Event.find_or_create_by(description: 'Event description', title: 'Event title',
                                      meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      delete "/api/v1/events/#{event.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
