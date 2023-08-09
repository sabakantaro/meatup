# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Places', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/places'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST /create' do
    it 'returns http success' do
      post '/api/v1/places', params: { latitude: 1.5, longitude: 1.5, location: 'Location', image: 'Image' }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE /destroy' do
    it 'returns http success' do
      place = Place.find_or_create_by(latitude: 1.5, longitude: 1.5, location: 'Location', image: 'Image')
      delete "/api/v1/places/#{place.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
