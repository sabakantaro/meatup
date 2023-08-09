# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do # rubocop:disable Metrics/BlockLength
  describe 'create' do
    it 'is valid with valid attributes' do
      user = User.new(name: 'John Doe', email: 'john@example.com', password: '00000000',
                      password_confirmation: '00000000')
      expect(user).to be_valid
    end
  end

  describe 'validations' do
    it 'is invalid without a name' do
      user = User.new(name: '', email: 'john@example.com', password: '00000000', password_confirmation: '00000000')
      expect_invalid(user, :name, "can't be blank")
    end

    it 'is invalid without an email' do
      user = User.new(name: 'John Doe', email: '', password: '00000000', password_confirmation: '00000000')
      expect_invalid(user, :email, "can't be blank")
    end

    it 'is invalid without a password' do
      user = User.new(name: 'John Doe', email: 'john@example.com', password: '', password_confirmation: '')
      expect_invalid(user, :password, "can't be blank")
    end

    it 'is invalid when password and password_confirmation do not match' do
      user = User.new(name: 'John Doe', email: 'john@example.com', password: '00000000',
                      password_confirmation: '11111111')
      expect_invalid(user, :password_confirmation, "doesn't match Password")
    end

    it 'is invalid when password is less than 8 letters' do
      user = User.new(name: 'John Doe', email: 'john@example.com', password: '1234567',
                      password_confirmation: '1234567')
      expect_invalid(user, :password, 'is too short (minimum is 8 characters)')
    end
  end

  def expect_invalid(user, attribute, error_message)
    expect(user).to_not be_valid
    expect(user.errors[attribute]).to include(error_message)
  end
end
