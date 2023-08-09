# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Comments', type: :request do
  event = Event.find_or_create_by(description: 'Event description', title: 'Event title',
                                  meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
  describe 'POST /crete' do
    it 'returns http success' do
      post "/api/v1/events/#{event.id}/comments",
           params: { comment: { user_id: 1, event_id: event.id, content: 'Content' } }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE /destroy' do
    it 'returns http success' do
      comment = Comment.find_or_create_by(user_id: 1, event_id: event.id, content: 'Content')
      delete "/api/v1/events/#{event.id}/comments/#{comment.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
