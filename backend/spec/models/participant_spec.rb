# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Participant, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      participant = Participant.new(user_id: 1, event_id: 1)
      expect(participant).to be_valid
    end
  end
end
