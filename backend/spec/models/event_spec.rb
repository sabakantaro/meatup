# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do # rubocop:disable Metrics/BlockLength
  describe 'create' do
    it 'is valid with valid attributes' do
      event = Event.new(description: 'Event description', title: 'Event title',
                        meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      expect(event).to be_valid
    end
  end

  describe 'validations' do # rubocop:disable Metrics/BlockLength
    it 'is invalid without a description' do
      event = Event.new(description: nil, title: 'Event title',
                        meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      expect_invalid(event, :description, "can't be blank")
    end

    it 'is invalid with a long description' do
      event = Event.new(description: 'a' * 501, title: 'Event title',
                        meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      expect_invalid(event, :description, 'is too long (maximum is 500 characters)')
    end

    it 'is invalid without a title' do
      event = Event.new(description: 'Event description', title: nil,
                        meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      expect_invalid(event, :title, "can't be blank")
    end

    it 'is invalid with a long title' do
      event =
        Event.new(description: 'Event description', title: 'a' * 51,
                  meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: 1)
      expect_invalid(event, :title, 'is too long (maximum is 50 characters)')
    end

    it 'is invalid without a meeting datetime' do
      event = Event.new(description: 'Event description', title: 'Event title',
                        meeting_datetime: nil, user_id: 1, place_id: 1)
      expect_invalid(event, :meeting_datetime, "can't be blank")
    end

    it 'is invalid without a user id' do
      event = Event.new(description: 'Event description', title: 'Event title',
                        meeting_datetime: '2023-08-08 12:00:00', user_id: nil, place_id: 1)
      expect_invalid(event, :user_id, "can't be blank")
    end

    it 'is invalid without a place id' do
      event = Event.new(description: 'Event description', title: 'Event title',
                        meeting_datetime: '2023-08-08 12:00:00', user_id: 1, place_id: nil)
      expect_invalid(event, :place_id, "can't be blank")
    end
  end

  def expect_invalid(event, attribute, error_message)
    expect(event).to_not be_valid
    expect(event.errors[attribute]).to include(error_message)
  end
end
