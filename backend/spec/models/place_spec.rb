# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Place, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      place = Place.new(location: 'place location', latitude: 123.3333,
                        longitude: 47.7777)
      expect(place).to be_valid
    end
    describe 'validations' do
      it 'is invalid without a location' do
        place = Place.new(location: nil, latitude: 123.3333,
                          longitude: 47.7777)
        expect_invalid(place, :location, "can't be blank")
      end

      it 'is invalid with a long location' do
        place = Place.new(location: 'place location', latitude: nil,
                          longitude: 47.7777)
        expect_invalid(place, :latitude, "can't be blank")
      end

      it 'is invalid without a latitude' do
        place = Place.new(location: 'place location', latitude: nil,
                          longitude: nil)
        expect_invalid(place, :longitude, "can't be blank")
      end
    end
  end

  def expect_invalid(place, attribute, error_message)
    expect(place).to_not be_valid
    expect(place.errors[attribute]).to include(error_message)
  end
end
