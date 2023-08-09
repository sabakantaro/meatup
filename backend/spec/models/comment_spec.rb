# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'create' do
    it 'is valid with valid attributes' do
      comment = Comment.new(content: 'comment content', user_id: 1,
                            event_id: 1)
      expect(comment).to be_valid
    end
    describe 'validations' do
      it 'is invalid without a content' do
        comment = Comment.new(content: nil, user_id: 1,
                              event_id: 1)
        expect_invalid(comment, :content, "can't be blank")
      end

      it 'is invalid with a long content' do
        comment = Comment.new(content: 'comment content', user_id: nil,
                              event_id: 1)
        expect_invalid(comment, :user_id, "can't be blank")
      end

      it 'is invalid without a user_id' do
        comment = Comment.new(content: 'comment content', user_id: nil,
                              event_id: nil)
        expect_invalid(comment, :event_id, "can't be blank")
      end
    end
  end

  def expect_invalid(comment, attribute, error_message)
    expect(comment).to_not be_valid
    expect(comment.errors[attribute]).to include(error_message)
  end
end
